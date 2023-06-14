import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SpendtItemProps } from '../../interfaces'
import globalStyles from '../styles'
import { moneyFormatter } from '../helpers'

export default function SpendtItem({spendt}:SpendtItemProps) {
    const diccionary = {
        earns: require('../img/icono_ahorro.png'),
        food: require('../img/icono_comida.png'),
        house: require('../img/icono_casa.png'),
        others: require('../img/icono_gastos.png'),
        hobbys: require('../img/icono_ocio.png'),
        health: require('../img/icono_salud.png'),
        suscriptions: require('../img/icono_suscripciones.png'),
        '': require('../img/icono_suscripciones.png'),
    }

    const {name, quantity, id, category} = spendt
    return (
        <View style={styles.container}>
            
            <View style={styles.content}>

                <View style={styles.imgContainer}>

                    <Image style={styles.img}
                    source={diccionary[category]}/>

                    <View style={styles.textContainer}>
                        <Text style={styles.nameSpendt}>{name}</Text>
                    </View>

                </View>

                <Text style={styles.quantity}>{moneyFormatter(quantity)}</Text>

            </View>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        ...globalStyles.container,
        marginBottom:20
    },
    content:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    imgContainer:{
        flexDirection: 'row',
        alignItems:'center',
        gap:20,
        flex:1
    },
    img:{
        width:80,
        height:80,
    },
    textContainer:{
        flex:1,
    },
    nameSpendt:{
        fontSize:22,
        color:'#64748B',
        marginBottom:5
    },
    quantity:{
        fontSize:20,
        fontWeight:'700'
    }
})