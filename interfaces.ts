export type newBudget = (budget:number) => void;
export type Spendt = {id?:string, date?:number , name:string, quantity:number, category:Categorys}
export type StateExpenses = Spendt[] | never

export type Categorys = '' | 'earns' | 'food' | 'house' | 'others' | 'hobbys' | 'suscriptions' | 'health'

export type Handler = () => void;
export type StateSpendt = Spendt;
export type SetSpendtHandler = (spendt:Spendt) => void;
export type EditSpendtHandler = (edit:boolean, spendt?:Spendt) => void
export type DeleteSpendtHandler = (id:string | undefined) => void

export type FilterHandler = (category:Categorys) => void

export interface NewBudgetProps {
    handleNewBudget: newBudget;
}
export interface BudgetControlProps{
    budget:number,
    expenses: never | Spendt[]
    resetApp:Handler
}
export interface FormNewSpendProps {
    handleModal: Handler,
    handleSpendt: (spend:Spendt) => void,
    handleEditSpendt:EditSpendtHandler,
    spendt:Spendt | undefined,
    handleDeleteSpendt:DeleteSpendtHandler
}
export interface ListExpensesProps {
    expenses:StateExpenses,
    handleModal:Handler,
    handleSetSpendt:SetSpendtHandler,
    filter:Categorys
    filterExpenses: StateExpenses 
}
export interface SpendtItemProps {
    spendt:Spendt,
    handleModal:Handler,
    handleSetSpendt:SetSpendtHandler
}

export interface FilterProps {
    filter:Categorys
    handleFilter:FilterHandler
}
