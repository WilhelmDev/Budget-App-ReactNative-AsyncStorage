import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import globalStyles from '../styles'
import { Picker } from '@react-native-picker/picker'
import { FilterProps } from '../../interfaces'

export default function Filter({filter, handleFilter}:FilterProps) {

    

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Filtrar Gastos</Text>

            <Picker style={{}}
                        selectedValue={filter}
                        onValueChange={(itemValue, itemIndex) => handleFilter(itemValue)}
                        >
                            <Picker.Item label='Todos los gastos' value=''/>
                            <Picker.Item label='Ahorro' value='earns'/>
                            <Picker.Item label='Comida' value='food'/>
                            <Picker.Item label='Casa' value='house'/>
                            <Picker.Item label='Gastos varios' value='others'/>
                            <Picker.Item label='Ocio' value='hobbys'/>
                            <Picker.Item label='Salud' value='health'/>
                            <Picker.Item label='Suscripciones' value='suscriptions'/>
                </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        ...globalStyles.container,
        transform: [{translateY:0}],
        marginTop:20
    },
    text:{
        fontSize:22,
        fontWeight:'900',
        color:'#64748b'
    }
})