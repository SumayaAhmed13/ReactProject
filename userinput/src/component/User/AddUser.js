import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredUserage, setEnteredUserage] = useState("");
  const [error,setError]=useState();
  const inputUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const inputUserageHandler = (event) => {
    setEnteredUserage(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 ||enteredUserage.trim().length === 0){
      setError({
        title:"Invalid Input",
        message:"Please enter a valid name and age (non-empty values)"
      })
      return;
    }
    if(+enteredUserage < 1){
      setError({
        title:'Invalid Age',
        message:'Please enter a valid age (>0).'
      })
      return;
    }
    props.onAddUser(enteredUsername,enteredUserage);
   
    setEnteredUsername("");
    setEnteredUserage("");
  };
  const errorHandler=()=>{
    setError(null);
  }
  return (
    <div>
     {error && <ErrorModal title={error.title} massage={error.message} onConfirm={errorHandler}/> } 
     <Card className={classes.input}>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="username">User Name</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={inputUsernameHandler}
          autoComplete="off"
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredUserage}
          onChange={inputUserageHandler}
        />
        <Button type="summit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};
export default AddUser;
