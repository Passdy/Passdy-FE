import React from "react";
import styles from "./Countdown.module.scss";

const Countdown = () => (
  <div className={styles.headerWrapper}>
    <div className={styles.countDownBanner}>
      <span>
        Mỗi ngày diện một <span className={styles.cruiticalNumber}>văn minh</span> hơn!
      </span>
    </div>
  </div>
);
export default Countdown;
