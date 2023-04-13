import { FC } from "react";
import { Link } from "react-router-dom";
import classes from "./ArticleItem.module.sass";

import avatar from "../../assets/avatar.png";
import like from "../../assets/like.svg";

const Task: FC = () => {
  return (
    <div className={classes["task-container"]}>
      <div className={classes["task-header"]}>
        <div className={classes["task-top"]}>
          <h2 className={classes["task-title"]}>
            <Link to="/article">Some article title</Link>
          </h2>
          <div className={classes["task-like"]}>
            <img src={like} alt="" className={classes["task-like__image"]} />
            <div className={classes["like-count"]}>12</div>
          </div>
          <div className={classes["task-title__tag"]}>Tag1</div>
        </div>
        <div className={classes["task-user"]}>
          <div className={classes["task-user__info"]}>
            <div className={classes["task-user__name"]}>Tolik Bu</div>
            <div className={classes["task-user__date"]}>June 15, 2023</div>
          </div>
          <div className={classes["task-like__avatar"]}>
            <img
              src={avatar}
              alt=""
              className={classes["task-like__avatar-image"]}
            />
          </div>
        </div>
      </div>
      <p className={classes["task-text"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
};

export default Task;
