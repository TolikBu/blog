import { FC } from "react";
import classes from "./App.module.sass";
import TaskList from "../TaskList/TaskList";
import Header from "../Header/Header";

const App: FC = () => {
  return (
    <div className={classes.container}>
      <Header />
      <TaskList />
    </div>
  );
};

export default App;
