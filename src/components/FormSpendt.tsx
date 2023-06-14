import { View, Text, Button, Pressable, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView} from 'react-native-safe-area-context'
import { FormNewSpendProps } from '../../interfaces'
import { Picker } from '@react-native-picker/picker'
import globalStyles from '../styles'

export default function FormSpendt({
    handleModal
    }:FormNewSpendProps) {
        const [category, setCategory] = useState('')

        return (
            <SafeAreaView style={styles.container}>
                <View>

                    <Pressable style={styles.btnCancel}
                    onLongPress={handleModal}>
                        <Text style={styles.btnCancelText}>Cancelar</Text>
                    </Pressable>

                </View>

                <View style={styles.form}>
                    <Text style={styles.title}>Nuevo Gasto</Text>

                    <View style={styles.field}>
                        <Text style={styles.label}>Nombre Gasto</Text>
                        <TextInput style={styles.input}
                        placeholder='Nombre del gasto. ej. Comida'/>
                    </View>
                

                    <View style={styles.field}>
                        <Text style={styles.label}>Cantidad Gasto</Text>
                        <TextInput style={styles.input}
                        placeholder='Cantidad del gasto. ej. 300' keyboardType='numeric'/>
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Categoria Gasto</Text>
                        <Picker style={styles.input}
                        selectedValue={category}
                        onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
                        >
                            <Picker.Item label='--Seleccione--' value=''/>
                            <Picker.Item label='Ahorro' value='earns'/>
                            <Picker.Item label='Comida' value='food'/>
                            <Picker.Item label='Casa' value='house'/>
                            <Picker.Item label='Gastos varios' value='others'/>
                            <Picker.Item label='Ocio' value='hobbys'/>
                            <Picker.Item label='Suscripciones' value='suscriptions'/>
                        </Picker>
                    </View>

                    <Pressable style={styles.btnSubmit}>
                        <Text style={styles.btnSubmitText}>Agregar Gasto</Text>
                    </Pressable>
                </View>

            </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#3453b7',
        flex:1,
    },
    form:{
        ...globalStyles.container
    },
    title:{
        textAlign:'center',
        fontSize:28,
        marginBottom:30,
        color:'#64748b',
    },
    field:{
        marginVertical:10
    },
    label:{
        color:'#64748b',
        fontSize:18,
        fontWeight:'bold'
    },
    input:{
        backgroundColor:'#f5f5f5',
        padding:10,
        borderRadius:10,
    },
    btnSubmit:{
        backgroundColor:'#516ecd',
        padding:12,
        marginTop:20,
        borderRadius:10
    },
    btnSubmitText:{
        textAlign:'center',
        textTransform:'uppercase',
        fontWeight:'bold',
        color:'#fff'
    },
    btnCancel:{
        backgroundColor: '#243a80',
        paddingHorizontal:10,
        paddingVertical:15,
        marginTop:20,
        marginHorizontal:10,
        borderRadius:10

    },
    btnCancelText:{
        fontWeight:'bold',
        color:'#fff',
        textAlign:'center',
        textTransform:'uppercase'
    },
})