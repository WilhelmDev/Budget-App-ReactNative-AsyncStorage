import { StyleSheet, Text, View } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

export default function Header() {
    return (

        <SafeAreaView >

            <Text style={styles.textHeader}>Planificador de Gastos</Text>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    
    textHeader:{
        textAlign:'center',
        fontSize:35,
        color:'#fff',
        textTransform:'uppercase',
        fontWeight:'bold',
        paddingTop:5,
    },

})
