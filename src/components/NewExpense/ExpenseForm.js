import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
        <form action="">
            <div className="new-expense">
                <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" min=".01" step=".01" />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" min="2019-01-01" step="2022-12-31" />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
                </div>
            </div>
        </form>
  );
};

export default ExpenseForm;
