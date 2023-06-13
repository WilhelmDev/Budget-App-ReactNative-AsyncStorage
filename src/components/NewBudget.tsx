import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import {NewBudgetProps, newBudget} from '../../interfaces'
import { useState } from "react";
import globalStyles from "../styles";
export default function NewBudget({handleNewBudget}:NewBudgetProps) {
    const [budget, setBudget] = useState('')

    return (
        <View style={styles.container}>

            <Text style={styles.label}
            >Definir Presupuesto</Text>

            <TextInput keyboardType="numeric" style={styles.input} 
            value={budget} onChangeText={setBudget}
            placeholder="Agrega tu presupuesto: Ej. 300"/>

            <Pressable style={styles.btn}
            onPress={() => handleNewBudget(Number(budget))}>
                <Text style={styles.btnText}>Agregar Presupuesto</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        ...globalStyles.container
    },
    label:{
        textAlign:'center',
        fontSize:24,
        color:'#3b82f6',
    },
    input:{
        backgroundColor: '#f5f5f5',
        padding:10,
        borderRadius:8,
        textAlign:'center',
        marginTop:25,
    },
    btn:{
        marginTop:25,
        backgroundColor:'#0b63f3',
        padding:12,
        borderRadius:10
    },
    btnText:{
        color:'#fff',
        textAlign:'center',
        textTransform:'uppercase',
        fontWeight:'bold'
    }
})