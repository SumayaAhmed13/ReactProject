import React, { useState } from "react";
import "./CourseInput.css";
import Button from "../UI/Button";

const CourseInput = (props) => {
 const [enteredValue,setValue]=useState('');
  const[isValid,setIsValid]=useState(true)

 const goalInputChangeHanlder=event=>{
   if(event.target.value.trim().length > 0){
      setIsValid(true);
   }
   setValue(event.target.value);
 }


 const onSubmitHandler=(event)=>{
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setIsValid(false)
      return;
    }
    props.onAddGoal(enteredValue);
    setValue('');

 }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-control">
        <label style={{color:!isValid?'red':'black'}}>Course Goal</label>
        <input style={{borderColor:!isValid?'red':'black',}} type="text" onChange={goalInputChangeHanlder}></input>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
