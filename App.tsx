import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from "react";
import { Alert, Image, Modal, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { Categorys, DeleteSpendtHandler, EditSpendtHandler, FilterHandler, StateExpenses, StateSpendt, newBudget } from './interfaces';
import {Spendt} from './interfaces'
import AsyncStorage from '@react-native-async-storage/async-storage';
import BudgetControl from './src/components/BudgetControl';
import { idGenerator } from './src/helpers';
import FormSpendt from './src/components/FormSpendt';
import Header from './src/components/Header';
import NewBudget from './src/components/NewBudget';
import ListExpenses from './src/components/ListExpenses';
import Filter from './src/components/Filter';

export default function App() {
	const [isValidBudget, setIsValidBudget] = useState(false)
	const [budget, setBudget] = useState(0)
	const [expenses, setExpenses] = useState<StateExpenses>([])
	const [modal, setModal] = useState(false)
	const [spendt, setSpendt] = useState<StateSpendt>()
	const [filter, setFilter] = useState<Categorys>('')
	const [filterExpenses, setFilterExpenses] = useState<StateExpenses>([])

	useEffect(() => { //* Verify if exists data in AsyncStorage
		const getBudgetStorage = async() => {
			try {
				const budgetStorage = await AsyncStorage.getItem('planner_budget') ?? 0
				if (Number(budgetStorage) > 0) {
					setBudget(Number(budgetStorage))
					setIsValidBudget(true)
				}
				return
			} catch (error) {
				console.log(error)
			}
		}
		getBudgetStorage()
	},[])

	useEffect(()=> {//* saving the budget in AsyncStorage
		if (isValidBudget) {
			const saveBudgetStorage = async() => {
				try {
					await AsyncStorage.setItem('planner_budget', JSON.stringify(budget))
				} catch (error) {
					console.log(error)
				}
			}
	
			saveBudgetStorage()
		}
	},[isValidBudget])

	useEffect(() => {//* Verify if exist Expenses in AsyncStorage
		const getExpensesStorage = async() => {
			try {
				const expensesStorage = await AsyncStorage.getItem('planner_expenses')
				setExpenses( expensesStorage ? JSON.parse(expensesStorage) : [] )
			} catch (error) {
				console.log(error)
			}
		}
		getExpensesStorage()
	},[])

	useEffect(() => {//* Save expenses in AsyncStorage
		const saveExpensesStorage = async () => {
			try {
				await AsyncStorage.setItem('planner_expenses', JSON.stringify(expenses))
			} catch (error) {
				console.log(error)
			}
		}
		saveExpensesStorage()
	},[expenses])

	const handleNewBudget:newBudget = (budget) => {
		if (budget > 0) {
			setIsValidBudget(true)
			setBudget(budget)
		} else {
			Alert.alert(
				'Error','El presupuesto no puede ser 0 o menor'
			)
		}
	}

	const handleModal = () => {
		setModal(!modal)
	}

	const handleSpendt = (spendt:Spendt) => {
		//*Validation
		if ([spendt.name, spendt.category].includes('') || spendt.quantity === 0) {
			Alert.alert(
				'Error',
				'Todos Los Campos son Obligatorios'
			)
			return
		}

		if (spendt.id) { //? update a spendt
			const updatedExpenses = expenses.map((arritem) => arritem.id === spendt.id ? spendt : arritem)
			setExpenses(updatedExpenses)
			
		} else { //? create a new spendt
			//*Sync State and close modal
			spendt.id= idGenerator()
			spendt.date= Date.now()
			setExpenses([...expenses, spendt])
			handleEditSpendt(false)
		}

		handleModal()
	}

	const handleSetSpendt = (spendt:Spendt) =>{
		setSpendt(spendt)
	}

	const handleEditSpendt:EditSpendtHandler = (edit, spendt) =>{ //todo Refactorizar Esta mierda
		if(!edit) {
			setSpendt({
				name:'',
				quantity:0,
				category:'',
				id: undefined,
				date: undefined
			})
			return
		}
	}

	const handleDeleteSpendt:DeleteSpendtHandler = (id) => {
		Alert.alert(
			'¿Desea eliminar este gasto?', 
			'Esta acion es irreversible', 
			[{text: 'no', style:'cancel'},
			{text:'Si, eliminar', onPress: () => {
				const updatedExpenses = expenses.filter((arritem) => arritem.id !== id)
				setExpenses(updatedExpenses)
				handleModal()
				handleEditSpendt(false)
			}}])
	}

	const handleFilter:FilterHandler = (category) => {
		setFilter(category)

		if (category === '') {
			setFilterExpenses([])
		} else {
			const filterArray = expenses.filter((arrItem) => arrItem.category === category)
			setFilterExpenses(filterArray)
		}
	}

return (
	<View style={styles.containerApp}>
		<StatusBar style='auto' translucent={true}/>

		<View >

			<ScrollView contentContainerStyle={{paddingBottom: 50}} >

					<View style={styles.header}>

						<Header />

						{isValidBudget 
						? <BudgetControl budget={budget} expenses={expenses}/>
						: <NewBudget handleNewBudget={handleNewBudget}/>}

					</View>

					{isValidBudget && (
						<>
							<Filter handleFilter={handleFilter} filter={filter}/>
							<ListExpenses expenses={expenses} handleModal={handleModal} 
							handleSetSpendt={handleSetSpendt}
							filter={filter} filterExpenses={filterExpenses}/>
						</>
						)}

			</ScrollView>


			{modal && (
				<Modal visible={modal} animationType='slide' onRequestClose={handleModal}
				statusBarTranslucent={true}>
					<FormSpendt handleModal={handleModal} spendt={spendt} handleDeleteSpendt={handleDeleteSpendt}
					handleSpendt={handleSpendt} handleEditSpendt={handleEditSpendt}/>
				</Modal>
			)}

			{isValidBudget && (
					<Pressable onPressOut={() => handleModal()}>
						<Image style={styles.image}
						source={require('./src/img/nuevo-gasto.png')} />
					</Pressable>
				)}

		</View>

	</View>
);
}

const styles = StyleSheet.create({
	containerApp: {
		flex:1,
		backgroundColor: '#f5f5f5',
	},
	container: {

	},
	header:{
		backgroundColor:'#3b82f6',
		marginBottom:60
	},
	image:{
		height:60,
		width:60,
		position:'absolute',
		bottom:20,
		right:20
	}
});
