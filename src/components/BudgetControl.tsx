import { View, Text, StyleSheet, Pressable } from 'react-native'
import {useState, useEffect} from 'react'
import { BudgetControlProps } from '../../interfaces'
import { moneyFormatter } from '../helpers'
import CircularProgress from 'react-native-circular-progress-indicator'
import globalStyles from '../styles'

export default function BudgetControl({
    budget, expenses, resetApp
    }:BudgetControlProps) {

    const [available, setAvailable] = useState(0)
    const [spendt, setSpendt] = useState(0)
    const [percentage, setPercentage] = useState(0)

    useEffect(() => {
        const totalSpendt = expenses.reduce( (total, gasto) => gasto.quantity + total, 0)
        const totalAvailable = budget - totalSpendt
        const newPercentage = ((budget - totalAvailable) / budget) * 100
        
        setPercentage(newPercentage)
        setAvailable(totalAvailable)
        setSpendt(totalSpendt)
    },[expenses])

        return (
        <View style={styles.container}>
            <View style={styles.centerComp}>
                <CircularProgress value={percentage} duration={1000}
                radius={120} 
                valueSuffix={'%'} 
                title='Gastado' titleStyle={{fontWeight:'bold', fontSize:20}} titleColor='#64748b'
                inActiveStrokeColor='#f5f5f5' inActiveStrokeWidth={20}
                activeStrokeColor='#3b82f6' activeStrokeWidth={15}
                />
            </View>

            <View style={styles.textContainer}>

                <Pressable style={styles.btn}
                onPress={resetApp}>
                    <Text style={styles.textBtn}>Reiniciar App</Text>
                </Pressable>

                <Text style={styles.value}>
                    <Text style={styles.label}>Presupuesto: </Text>
                    {moneyFormatter(budget)}
                </Text>

                <Text style={styles.value}>
                    <Text style={styles.label}>Disponible: </Text>
                    {moneyFormatter(available)}
                </Text>

                <Text style={styles.value}>
                    <Text style={styles.label}>Gastado: </Text>
                    {moneyFormatter(spendt)}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        ...globalStyles.container
    },
    centerComp:{
        alignItems:'center'
    },
    textContainer:{
        marginTop:50
    },
    value:{
        fontSize:24,
        textAlign:'center',
        marginBottom:10
    },
    label:{
        fontWeight:'700',
        color:'#3b82f6'
    },
    btn:{
        backgroundColor:'#f63b82',
        padding:10,
        marginBottom:30,
        borderRadius:10
    },
    textBtn:{
        textAlign:'center',
        color: '#fff',
        fontWeight:'bold',
        textTransform:'uppercase'
    },
})