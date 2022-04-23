import React, { useState,Fragment } from "react";
import AddUser from "./component/User/AddUser";
import UserList from "./component/User/UserList";

function App() {
  const[userList,setUserList]=useState([]);
  const userAddHandler=(uName,uAge)=>{
    setUserList((preListUser)=>{
      return [...preListUser,{name:uName,age:uAge,id:Math.random().toString()}]
    }) 
  }
  return (
    <Fragment>
      <AddUser onAddUser={userAddHandler} />
      <UserList users={userList} />
    </Fragment>
  );
}

export default App;
