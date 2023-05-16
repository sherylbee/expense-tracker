import React, {useState, useEffect} from "react";
import './styles/NewExpenseToggle.css'

const NewExpenseToggle = (props) =>{
    const [showNewExpense, toggleShowNewExpense] = useState(true);
    const toggleNewExpenseForm =()=>{
        toggleShowNewExpense(!showNewExpense)
        props.onToggleExpenseForm(!showNewExpense)
    }
    useEffect(()=>{
        toggleShowNewExpense(props.showAddExpense)
    }, [props.showAddExpense])
    let showHide = showNewExpense? "Hide": "Show";    
    
    return (
        <div className="toggle-new-expense">
            <button onClick={toggleNewExpenseForm} className="toggle-new-expense-btn">
                {showHide + ' Add Expense'}
            </button>
        </div>
    )
}
export default NewExpenseToggle;