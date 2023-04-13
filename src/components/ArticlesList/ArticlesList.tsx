import { FC } from "react";
// import classes from "./TaskList.module.sass";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Task from "../ArtticleItem/ArticleItem";
import TaskItem from "../ArticlePreview/ArticlePreview";

const TaskList: FC = () => {
  return (
    <Router>
      <Route path="/" component={Task} />
      <Route path="/article" component={TaskItem} />
    </Router>
  );
};

export default TaskList;
