import { FC } from "react";
// import classes from "./TaskList.module.sass";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Task from "../Task/Task";
import TaskItem from "../TaskItem/TaskItem";

const TaskList: FC = () => {
  return (
    <Router>
      <Route path="/" component={Task} />
      <Route path="/article" component={TaskItem} />
    </Router>
  );
};

export default TaskList;
