import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesYearFilter from './ExpensesYearFilter'

function Expenses(props){
    const [selectedYear, updateSelectedYear] = useState("")

    let expenseList = props.expenses.map(expense =>
        <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={Math.random()}/>
    )
    const yearSelectHandler = (year)=>{
        alert(year);
        updateSelectedYear(year)
    }
        
    return(
        <Card className="expenses">
            <div> {selectedYear}</div>
            <ExpensesYearFilter onYearSelect={yearSelectHandler}/>
            {expenseList}
        </Card>
    )
}

export default Expenses;