import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function BudgetControl() {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../img/grafico.jpg')}/>
            </View>
            <Text>BudgetControl</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

    }
})