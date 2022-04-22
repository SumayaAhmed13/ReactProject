import React, { useState } from "react";
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
    <div>
      <AddUser onAddUser={userAddHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
