import { NextPage } from "next";
import React from "react";
import styles from "./Countdown.module.scss";

const Countdown: NextPage = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.countDownBanner}>
        <span>Mỗi ngày diện một văn minh hơn!</span>
      </div>
    </div>
  );
};
export default Countdown;
