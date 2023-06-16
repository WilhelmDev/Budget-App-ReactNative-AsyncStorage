import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { Alert, Image, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context'
import Header from './src/components/Header';
import NewBudget from './src/components/NewBudget';
import { StateExpenses, newBudget } from './interfaces';
import BudgetControl from './src/components/BudgetControl';
import {Spendt} from './interfaces'
import FormSpendt from './src/components/FormSpendt';
import { idGenerator } from './src/helpers';
import ListExpenses from './src/components/ListExpenses';

export default function App() {
	const [isValidBudget, setIsValidBudget] = useState(false)
	const [budget, setBudget] = useState(0)
	const [expenses, setExpenses] = useState<StateExpenses>([])
	const [modal, setModal] = useState(false)

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
		if (Object.values(spendt).includes('') || Object.values(spendt).includes(0)) {
			Alert.alert(
				'Error',
				'Todos Los Campos son Obligatorios'
			)
			return
		}

		//*Sync State and close modal
		spendt.id= idGenerator()
		spendt.date= Date.now()
		setExpenses([...expenses, spendt])
		handleModal()
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
						<ListExpenses expenses={expenses} handleModal={handleModal} />
					)}

			</ScrollView>


			{modal && (
				<Modal visible={modal} animationType='slide' onRequestClose={handleModal}
				statusBarTranslucent={true}>
					<FormSpendt handleModal={handleModal} handleSpendt={handleSpendt}/>
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
