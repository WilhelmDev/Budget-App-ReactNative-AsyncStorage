import { StyleSheet, Text, View } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

export default function Header() {
    return (

        <SafeAreaView style={styles.header}>

            <Text style={styles.textHeader}>Planificador de Gastos</Text>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#3b82f6'
    },
    textHeader:{
        textAlign:'center',
        fontSize:35,
        color:'#fff',
        textTransform:'uppercase',
        fontWeight:'bold',
        paddingTop:5,
        paddingBottom: 20
    },

})
