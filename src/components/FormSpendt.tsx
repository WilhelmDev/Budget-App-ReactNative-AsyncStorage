import { View, Text, Button, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView} from 'react-native-safe-area-context'
import { FormNewSpendProps } from '../../interfaces'
import { Picker } from '@react-native-picker/picker'

export default function FormSpendt({
    handleModal
    }:FormNewSpendProps) {
        const [category, setCategory] = useState('')

        return (
            <SafeAreaView>
                <View>

                    <Pressable onPress={handleModal}>
                        <Text>Cancelar</Text>
                    </Pressable>

                </View>

                <View>
                    <Text>Nombre Gasto</Text>
                    <TextInput placeholder='Nombre del gasto. ej. Comida'/>
                

                    <View>
                        <Text>Cantidad Gasto</Text>
                        <TextInput placeholder='Cantidad del gasto. ej. 300' keyboardType='numeric'/>
                    </View>

                    <View>
                        <Text>Categoria Gasto</Text>
                        <Picker
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

                    <Pressable>
                        <Text>Agregar Gasto</Text>
                    </Pressable>
                </View>

            </SafeAreaView>
        )
}