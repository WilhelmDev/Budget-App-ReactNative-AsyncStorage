export type newBudget = (budget:number) => void;

export interface NewBudgetProps {
    handleNewBudget: newBudget;
}

export type Spendt = { id?:string ,name:string, quantity:number, category:Categorys}
export type StateExpenses = Spendt[] | never
export interface BudgetControlProps{
    budget:number,
    expenses: never | Spendt[]
}
export type Categorys = '' | 'earns' | 'food' | 'house' | 'others' | 'hobbys' | 'suscriptions' | 'health'
export type Handler = () => void;
export interface FormNewSpendProps {
    handleModal: Handler,
    handleSpendt: (spend:Spendt) => void
}
export interface ListExpensesProps {
    expenses:StateExpenses
}


export interface SpendtItemProps {
    spendt:Spendt
}
