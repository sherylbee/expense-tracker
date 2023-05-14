import React from "react";
import "./ExpensesYearFilter.css";

function ExpensesYearFilter(props) {
  const selectedYearChangeHandler = (e) => {
    //returning selected filter to parent component
    props.onFilter(Number(e.target.value));
  };
  return (
    <div id="expenses-year-select">
      <label htmlFor="expenses-year-filter">Choose a year: </label>
      <select
        name="filter"
        id="expenses-year-filter"
        onChange={selectedYearChangeHandler}
      >
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2022">2023</option>
      </select>
    </div>
  );
}

export default ExpensesYearFilter;
