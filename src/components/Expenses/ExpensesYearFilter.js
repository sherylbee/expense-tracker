import React from "react";
import './ExpensesYearFilter.css';

function ExpensesYearFilter(props) {
//   const [selectedYear, updateSelectedYear] = useState("");
  const selectedYearChangeHandler = (e) => {
    console.log(e.target.value)
    // updateSelectedYear(e.target.value);
    props.onYearSelect(e.target.value)
  };
  return (
    <div id="expenses-year-select">
       
      <label htmlFor="expenses-year-filter">Choose a year: </label>
      <select
        name="filter"
        id="expenses-year-filter"
        onChange={selectedYearChangeHandler}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
}

export default ExpensesYearFilter;
