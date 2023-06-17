import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native'
import React, { useState, useEffect} from 'react'
import { SafeAreaView} from 'react-native-safe-area-context'
import { Categorys, FormNewSpendProps } from '../../interfaces'
import { Picker } from '@react-native-picker/picker'
import globalStyles from '../styles'

export default function FormSpendt({
    handleModal, handleSpendt, handleEditSpendt, spendt, handleDeleteSpendt
    }:FormNewSpendProps) {
        const [name, setName] = useState('')
        const [quantity, setQuantity] = useState('')
        const [category, setCategory] = useState<Categorys>('')

        useEffect(() => {
            if (spendt?.id) {
                setName(spendt.name)
                setQuantity(spendt.quantity.toString())
                setCategory(spendt.category)
            }
        },[spendt])

        const handleCancel = () => {
            handleModal()
            handleEditSpendt(false)
        }

        const handleSubmit = () => {
            const newSpendt = {
                name,
                category,
                quantity: Number(quantity),
                id:spendt?.id,
                date:spendt?.date
            }
            handleSpendt(newSpendt)
        }

        const handleDelete = () => {
            handleDeleteSpendt(spendt?.id)
        }

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.btnContainer}>

                    <Pressable style={[styles.btn, styles.btnCancel]}
                    onPress={handleCancel}>
                        <Text style={styles.btnText}>Cancelar</Text>
                    </Pressable>

                    {spendt?.id && (
                        <Pressable style={[styles.btnDelete, styles.btn]}
                            onPress={handleDelete}>
                                <Text style={styles.btnText}>Eliminar</Text>
                            </Pressable>
                    )}

                </View>

                <View style={styles.form}>
                    <Text style={styles.title}
                    >{spendt?.id ? 'Editar Gasto' : 'Nuevo Gasto'}</Text>

                    <View style={styles.field}>
                        <Text style={styles.label}>Nombre Gasto</Text>
                        <TextInput style={styles.input} value={name} onChangeText={setName}
                        placeholder='Nombre del gasto. ej. Comida'/>
                    </View>
                

                    <View style={styles.field}>
                        <Text style={styles.label}>Cantidad Gasto</Text>
                        <TextInput style={styles.input} value={quantity} onChangeText={setQuantity}
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
                            <Picker.Item label='Salud' value='health'/>
                            <Picker.Item label='Suscripciones' value='suscriptions'/>
                        </Picker>
                    </View>

                    <Pressable onPress={handleSubmit}
                    style={styles.btnSubmit}>
                        <Text style={styles.btnSubmitText}
                        >{spendt?.id ? 'Actualizar Gasto' : 'Agregar Gasto'}</Text>
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
    btnContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    btn:{
        paddingHorizontal:10,
        paddingVertical:15,
        marginTop:20,
        marginHorizontal:10,
        borderRadius:10,
        flex:1
    },
    btnText:{
        fontWeight:'bold',
        color:'#fff',
        textAlign:'center',
        textTransform:'uppercase'
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
    },
    btnDelete:{
        backgroundColor: '#b73453',
    }
})