import { StyleSheet, Text, View, StatusBar} from 'react-native'

export default function Header() {
    return (

        <View style={styles.headerContainer} >

            <Text style={styles.textHeader}>Planificador de Gastos</Text>

        </View>

    )
}

const styles = StyleSheet.create({
    headerContainer:{
        paddingTop: StatusBar.currentHeight
    },
    textHeader:{
        textAlign:'center',
        fontSize:35,
        color:'#fff',
        textTransform:'uppercase',
        fontWeight:'bold',
        paddingTop:5,
    },

})
