import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesYearFilter from './ExpensesYearFilter'

function Expenses(props){
    const [expenses, updateExpenses] = useState(props.expenses)
    const returnFilteredExpenses = (filteredExpenses)=>{
        updateExpenses(filteredExpenses)
    }
    let expenseList = expenses.map(expense =>
        <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id}/>
    )
    let expenseContent;
    if(expenseList.length > 0){
        expenseContent = expenseList
    }
    else{
        expenseContent = <p>No Expenses Found</p>
    }
    return(
        <Card className="expenses">
            <ExpensesYearFilter expenseList={props.expenses} onReturnFilteredExpenses={returnFilteredExpenses}/>
            {expenseContent}
        </Card>
    )
}

export default Expenses;