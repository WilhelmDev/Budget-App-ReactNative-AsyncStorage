import { View, Text, Image, StyleSheet } from 'react-native'
import {useState, useEffect} from 'react'
import globalStyles from '../styles'
import { BudgetControlProps } from '../../interfaces'
import { moneyFormatter } from '../helpers'
import CircularProgress from 'react-native-circular-progress-indicator'

export default function BudgetControl({
    budget, expenses
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
    img:{
        height:250,
        width:250
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
    }
})