
import React, { useState } from 'react';
import "./styles/ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem({title, date, amount}) {
    let editAmount = false;
    const [expenseTitle, updateExpenseTitle] = useState(title);
    const [currentAmount, updateAmount] = useState(amount);
    const [currentEditAmount, updateEditAmount] = useState(editAmount);
    const titleChangeHandler=()=>{
        updateExpenseTitle(`I pick ${Math.random()*10 +1}`)
        console.log(expenseTitle)
    }
    // const handleEditAmount = ()=>{
    //     editAmount = true;
    // }
    const handleUpdateAmount = (e) =>{
        updateAmount(e.target.value)
        updateEditAmount(false);
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <div id='expense-title'>
                    <h2>{expenseTitle}</h2>
                    <button onClick={titleChangeHandler}>change title</button>
                </div>
                <div id='expense-item__price-component'>
                    <div className="expense-item__price">
                        
                        <div>
                            {currentEditAmount && <input type="number" min="1" step="any" onBlur={handleUpdateAmount} defaultValue={currentAmount}></input>}
                            {!currentEditAmount && currentAmount? "$"+currentAmount: ""}
                        </div>
                        <button onClick={()=> updateEditAmount(true)}>Change Amount</button>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
