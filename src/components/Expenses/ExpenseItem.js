
import React, { useState } from 'react';
import "./styles/ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem({title, date, amount, editAmountCb}) {
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
        editAmountCb(e.target.value)//spb TODO: come back and finish this functionality later -- need to lift this state back up to bind it to the corresponding expense state.; also consider changing the expense view -- i.e. option to condense months of a year into a single bar with expsenses summed
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
