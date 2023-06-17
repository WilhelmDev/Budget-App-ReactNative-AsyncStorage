import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { ListExpensesProps } from '../../interfaces'
import SpendtItem from './SpendtItem'

export default function ListExpenses({
    expenses, handleModal, 
    handleSetSpendt, 
    filter, filterExpenses}:ListExpensesProps) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gastos</Text>

            {filter
            ? ( filterExpenses.map( (spendt) =>
            <SpendtItem  key={spendt.id} spendt={spendt} handleModal={handleModal} handleSetSpendt={handleSetSpendt}/> ))
            : ( expenses.map( (spendt) => 
            <SpendtItem  key={spendt.id} spendt={spendt} handleModal={handleModal} handleSetSpendt={handleSetSpendt}/> ))}

            {expenses.length === 0 || (filterExpenses.length === 0 && !!filter)
            && (<Text style={styles.empyList}>No hay Gastos</Text>)
            }

            {expenses.length === 0 && (<Text style={styles.empyList}>No hay Gastos</Text>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:30,
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