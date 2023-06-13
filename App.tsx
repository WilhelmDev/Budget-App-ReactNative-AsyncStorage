import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { Alert, Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context'
import Header from './src/components/Header';
import NewBudget from './src/components/NewBudget';
import { newBudget } from './interfaces';
import BudgetControl from './src/components/BudgetControl';
import {Spendt} from './interfaces'
import FormSpendt from './src/components/FormSpendt';

export default function App() {
	const [isValidBudget, setIsValidBudget] = useState(false)
	const [budget, setBudget] = useState(0)
	const [expenses, setExpenses] = useState<Spendt[] | never>([])
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

return (
	<View style={styles.containerApp}>
		<StatusBar style='auto' translucent={true}/>

		<View style={styles.container}>

			<SafeAreaView style={styles.header}>

				<Header />

				{isValidBudget 
				? <BudgetControl budget={budget} expenses={expenses}/>
				: <NewBudget handleNewBudget={handleNewBudget}/>}

			</SafeAreaView>

			{modal && (
				<Modal visible={modal} animationType='slide' statusBarTranslucent={true}>
					<FormSpendt handleModal={handleModal}/>
				</Modal>
			)}

			{isValidBudget && (
				<Pressable onPress={handleModal}>
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
		backgroundColor:'#3b82f6'
	},
	image:{
		height:60,
		width:60,
		position:'absolute',
		top:100,
		right:20
	}
});
