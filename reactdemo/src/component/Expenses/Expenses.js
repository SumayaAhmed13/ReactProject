import React, { useState } from "react";
import "./Expenses.css";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filetrExpense=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filterYear
  })
 

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filetrExpense}/>
        <ExpensesList items={filetrExpense}/>
      </Card>
    </div>
  );
};

export default Expenses;
