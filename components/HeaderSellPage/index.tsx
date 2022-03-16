import React from "react";
import styles from "./HeaderSellPage.module.scss";

type IProps = {
  bigTitle: string;
  smallTitle: string;
};

const HeaderSellPage = ({ bigTitle, smallTitle }: IProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bgBlur} />
      <div className={styles.bgText}>
        <div className={styles.bigTitle}>{bigTitle}</div>
        <div className={styles.smallTitle}>{smallTitle}</div>
      </div>
    </div>
  );
};

export default HeaderSellPage;
