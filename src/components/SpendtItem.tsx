import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SpendtItemProps } from '../../interfaces'
import globalStyles from '../styles'

export default function SpendtItem({spendt}:SpendtItemProps) {

    const {name, quantity, id, category} = spendt
    return (
        <View style={styles.container}>
            <Text>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        ...globalStyles.container,
        marginBottom:20
    }
})