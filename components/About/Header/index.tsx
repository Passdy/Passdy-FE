import React from "react";
import styles from "./HeaderAbout.module.scss";

const HeaderAbout = () => (
  <div className={styles.wrapper}>
    <div className={styles.bgBlur} />
    <div className={styles.bgText}>
      <div className={styles.bigTitle}>
        Passdy mang đến giải pháp tiện lợi giúp bạn diện văn minh
      </div>
    </div>
  </div>
);

export default HeaderAbout;
