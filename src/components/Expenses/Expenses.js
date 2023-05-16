import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem';
import './styles/Expenses.css';
import Card from '../UI/Card';
import ExpensesYearFilter from './ExpensesYearFilter'

function Expenses(props){
   
    const [expenses, updateExpenses] = useState(props.expenses)
    const filterExpenses = (filter)=>{
        let filteredExpenses = filter !=="All"? props.expenses.filter(expense => expense.date.getFullYear() === Number(filter)): props.expenses;
        updateExpenses(filteredExpenses)
    }
    
    //updating expenses on change to props est. in parent (new expense) vs new state received from child (filtered expense)
    React.useEffect(() => {
        updateExpenses(props.expenses);
    }, [props.expenses]);
//spb TODO: come back and finish this -- consider cloning the original array on cb
    let expenseList = expenses.map(expense =>
        <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} editAmountCb={editAmountCb} key={expense.id}/>
    )

    let expenseContent;
    if(expenseList.length > 0){
        expenseContent = expenseList
    }
    else{
        expenseContent = <h3 className='no-expenses-content'>No Expenses Found</h3>
    }
    return(
        <Card className="expenses">
            <ExpensesYearFilter expenseList={props.expenses} onFilter={filterExpenses}/>
            {expenseContent}
        </Card>
    )
}

export default Expenses;