import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveEnteredDataHandler=(saveData)=>{
    const expenseData={
      ...saveData,
      id:Math.random().toString(),

    }
    //console.log(expenseData);
    props.onsaveData(expenseData);

  }
  return <div className="new-expense">    
    <ExpenseForm onSaveEnteredData={saveEnteredDataHandler}/>
  </div>;
};
export default NewExpense;
