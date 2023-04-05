import { FC } from "react";
import classes from "./TaskItem.module.sass";

import avatar from "../../assets/avatar.png";
import like from "../../assets/like.svg";

const Task: FC = () => {
  return (
    <div className={classes["task-container"]}>
      <div className={classes["task-header"]}>
        <div className={classes["task-top"]}>
          <h2 className={classes["task-title"]}>Some article title</h2>
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
      <div className={classes["task-content"]}>
        <h2 className={classes["task-content__title"]}>
          Est Ampyciden pater patent
        </h2>
        <div className={classes["task-content__pharagrah"]}>
          <h3 className={classes["pharagrah-title"]}>Amor saxa inpiger</h3>
          <p className={classes["pharagrah-text"]}>
            Lorem markdownum Stygias neque is referam fudi, breve per. Et
            Achaica tamen: nescia ista occupat, illum se ad potest humum et.
          </p>
        </div>
        <div className={classes["task-content__pharagrah"]}>
          <h3 className={classes["pharagrah-title"]}>Qua deos has fontibus</h3>
          <p className={classes["pharagrah-text"]}>
            Recens nec ferro responsaque dedere armenti opes momorderat pisce,
            vitataque et fugisse. Et iamque incipiens, qua huius suo omnes ne
            pendentia citus pedum.
          </p>
        </div>
        <div className={classes["task-content__pharagrah"]}>
          <h3 className={classes["pharagrah-title"]}>Quamvis pronuba</h3>
          <p className={classes["pharagrah-text"]}>
            Ulli labore facta. Io cervis non nosterque nullae, vides: aethere
            Delphice subit, tamen Romane ob cubilia Rhodopen calentes librata!
            Nihil populorum flava, inrita? Sit hic nunc, hoc formae Esse illo?
            Umeris eram similis, crudelem de est relicto ingemuit finiat Pelia
            uno cernunt Venus draconem, hic, Methymnaeae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task;
