import React from "react";
import "./CourseGoalList.css";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
const CourseGoalList = (props) => {
  return (
    <ul className="goal_list">
      {props.items.map((goal) => (
        <CourseGoalItem key={goal.id} id={goal.id} onDelete={props.onItemDelete}>
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};
export default CourseGoalList;
