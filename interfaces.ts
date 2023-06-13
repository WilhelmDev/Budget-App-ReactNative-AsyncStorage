export type newBudget = (budget:number) => void;

export interface NewBudgetProps {
    handleNewBudget: newBudget;
}

export type Spendt = {id:number, quantity:number}
export interface BudgetControlProps{
    budget:number,
    expenses: never | Spendt[]
}

export type Handler = () => void;
export interface FormNewSpendProps {
    handleModal: Handler
}
