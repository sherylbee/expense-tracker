import React, {useState} from "react";
import './NewExpenseToggle.css'

const NewExpenseToggle = (props) =>{
    const [showNewExpense, toggleShowNewExpense] = useState(true);
    const toggleNewExpenseForm =()=>{
        toggleShowNewExpense(!showNewExpense)
        props.onToggleExpenseForm(showNewExpense)
    }
    return (
        <div className="toggle-new-expense">
            <button onClick={toggleNewExpenseForm} className="toggle-new-expense-btn">
                Show add expense
            </button>
        </div>
    
    )
}
export default NewExpenseToggle;