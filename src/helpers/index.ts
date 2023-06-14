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