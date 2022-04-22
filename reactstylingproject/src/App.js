import { useState } from "react";
import "./App.css";
import CourseInput from './components/CourseInput/CourseInput.js';
import CourseGoalList from "./components/CourseGoalList/CourseGoalList";

function App() {
  const [courseGoals,setCourseGoals]=useState([
    {text:"Do all exercises", id:'g1'},
    {text:"Understand All properly", id:'g2'},
  ]);
  const goalHandler=(goals)=>
  {
    setCourseGoals(preGoal=>{
      const updateData=[...preGoal];
      updateData.unshift({text:goals,id:Math.random().toString()})

      return updateData;
    });
  }
  const goalDeleteHandler=(goalIds)=>{
    setCourseGoals(pregoals=>{
      const updateData=pregoals.filter(goal=>goal.id!==goalIds)
      return updateData;
    })

  }
  let content=(<p style={{textAlign:'center'}}>No Goals Found</p>)
  if(courseGoals.length>0){
    content=(<CourseGoalList  items={courseGoals} onItemDelete={goalDeleteHandler}/>)
  
  }
  return (
    <div>
      <section id="goal-form">
          <CourseInput onAddGoal={goalHandler}/>
      </section>
      <section id="goals">{content}</section>
    </div>
  );
}

export default App;
