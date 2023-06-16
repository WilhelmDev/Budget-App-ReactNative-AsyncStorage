import { Categorys } from "../../interfaces"

export const moneyFormatter = (quantity:number):string => {
    let options = {
        style:'currency',
        currency:'USD'
    }
    return quantity.toLocaleString('en-US', options)
}

export const idGenerator = () => {
    const id = Math.random().toString(36).substring(2,11)
    const date = Date.now().toString(36)
    return id + date
}

export const iconDiccionary = {
    earns: require('../img/icono_ahorro.png'),
    food: require('../img/icono_comida.png'),
    house: require('../img/icono_casa.png'),
    others: require('../img/icono_gastos.png'),
    hobbys: require('../img/icono_ocio.png'),
    health: require('../img/icono_salud.png'),
    suscriptions: require('../img/icono_suscripciones.png'),
}

export function dateFormatter(date:number):string {
    const newDate = new Date(date)
    const dateFormated = newDate.toLocaleDateString('es-ES',{year:'numeric', month:'long', day:'numeric'})
    return dateFormated
}