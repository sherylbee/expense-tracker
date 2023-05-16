import React, {useState} from "react";
import "./styles/ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setTitle] = useState('')
    const [enteredAmount, setAmount] = useState('')
    const [enteredDate, setDate] = useState(new Date(0))
    function titleChangeHandler(e){
        setTitle(e.target.value)
        // console.log(e.target.value)
    }
    function amountChangeHandler(e){
        setAmount(e.target.value)
        // console.log(e.target.value)
    }
    function dateChangeHandler(e){
        setDate(e.target.value)
        // console.log(e.target.value)
    }
    function submitHandler(e){
        e.preventDefault();
        let expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
            id: Math.random() * 10000
        }
        // console.log(expenseData)
        props.onSubmitExpense(expenseData)

        setTitle('');
        setAmount('');
        setDate(new Date(0));
    }
    // function showExpenseForm(){
    //     props.showExpenseForm(false)
    // }

  return (
        <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label htmlFor="">Title</label>
                        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="">Amount</label>
                        <input type="number" min=".01" step=".01" value={enteredAmount} onChange={amountChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="">Date</label>
                        <input type="date" min="2019-01-01" step="1" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                        <button type="button" onClick={()=>props.showExpenseForm(false)}>Cancel</button>
                        <button type="submit">Add Expense</button>
                </div>
        </form>
  );
};

export default ExpenseForm;
