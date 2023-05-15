import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{
    const submitExpenseHandler = (expenseData)=>{
        props.onAddExpense(expenseData)
    }
    function show(showExpenseForm){
        props.showExpenseForm(showExpenseForm)
    }
    return ( 
        <div className='new-expense'>
            <ExpenseForm onSubmitExpense={submitExpenseHandler} showExpenseForm={show}/> 
        </div>
    )
}

export default NewExpense;