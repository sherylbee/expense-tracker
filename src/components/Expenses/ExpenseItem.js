
import React, { useState } from 'react';
import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem({title, date, amount}) {
    const [expenseTitle, setTitle] = useState(title);

    const clickHandler=()=>{
        setTitle(`I pick ${Math.random()*10 +1}`)
        console.log(expenseTitle)
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">{amount}</div>
            </div>
            <button onClick={clickHandler}>change title</button>
        </Card>
    );
}

export default ExpenseItem;
