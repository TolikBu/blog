import { FC } from "react";
import classNames from "classnames";

import classes from "./Header.module.sass";
import avatar from "../../assets/avatar.png";

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <span className={classes["header-text"]}>Realworld Blog</span>
      <div className={classes["header-btns"]}>
        <div
          className={classNames(classes["header-btns__item"], classes.singin)}
        >
          Sing In
        </div>
        <div
          className={classNames(classes["header-btns__item"], classes.singup)}
        >
          Sing Up
        </div>
        <div
          className={classNames(classes["header-btns__item"], classes.create)}
        >
          Create Account
        </div>
        <div className={classes["header-user"]}>
          <div className={classes["header-user__name"]}>Tolik Bu</div>
          <div className={classes["header-user__avatar"]}>
            <img
              src={avatar}
              alt=""
              className={classes["header-user__avatar-image"]}
            />
          </div>
        </div>
        <div
          className={classNames(classes["header-btns__item"], classes.logout)}
        >
          Log Out
        </div>
      </div>
    </header>
  );
};

export default Header;
