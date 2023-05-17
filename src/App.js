import React, {useState} from 'react'
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import NewExpenseToggle from './components/NewExpense/NewExpenseToggle'
import Chart from './components/Chart/Chart';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
      id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) 
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expensesList, updateExpenses] = useState(expenses);
  const [filteredExpensesList, updateFilteredExpenses] = useState(expenses);
  const [showNewExpense, updateShowNewExpense] = useState(true);
  const addExpenseHandler = (expenseEntry)=>{
    updateExpenses(prev=>[...prev, expenseEntry])
    console.log(expensesList)
  }
  const show = (showExpenseForm)=>{
    updateShowNewExpense(showExpenseForm)
  }
  const handleFilteredExpenses = (filteredExpenses)=>{
    updateFilteredExpenses(filteredExpenses)
  }
  return (
    <div>
    <h1 id='page-title'>Expense Tracker</h1>
    <Chart expenses={filteredExpensesList}/>
    { 
      showNewExpense &&
      <NewExpense onAddExpense={addExpenseHandler} showExpenseForm={show}/>
    }
      <NewExpenseToggle onToggleExpenseForm={updateShowNewExpense} showAddExpense={showNewExpense}/>
      <Expenses expenses={expensesList} onFilterExpenses={handleFilteredExpenses} />
    </div>
  );
}

export default App;
