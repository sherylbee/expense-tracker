import React from 'react'
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';

function Expenses(props){

    let expenseList = props.expenses.map(expense =>
        <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={Math.random()}/>
    )
        
    return(
        <Card className="expenses">
            {expenseList}
        </Card>
    )
}

export default Expenses;