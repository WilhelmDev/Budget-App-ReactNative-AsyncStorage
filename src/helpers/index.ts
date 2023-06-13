export const moneyFormatter = (quantity:number):string => {
    let options = {
        style:'currency',
        currency:'USD'
    }
    return quantity.toLocaleString('en-US', options)
}