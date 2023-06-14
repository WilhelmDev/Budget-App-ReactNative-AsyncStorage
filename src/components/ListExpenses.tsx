import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { ListExpensesProps } from '../../interfaces'
import SpendtItem from './SpendtItem'

export default function ListExpenses({expenses}:ListExpensesProps) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gastos</Text>

            {expenses.length === 0 
            ? <Text style={styles.empyList}>No hay Gastos</Text>
            : expenses.map( (spendt) => 
                <SpendtItem  key={spendt.id} spendt={spendt}/>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:40,
        marginBottom: 10
    },
    title:{
        color:'#64748B',
        textAlign:'center',
        fontSize:30,
        fontWeight:'700'
    },
    empyList:{
        marginVertical:20,
        textAlign:'center',
        fontSize:20
    }
})