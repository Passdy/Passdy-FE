import React from "react";
import styles from "./HeaderSellPage.module.scss";

const HeaderSellPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bgBlur}/>
      <div className={styles.bgText}>
        <div className={styles.bigTitle}>Túi đồ của bạn đang đến với thời trang bền vững</div>
        <div className={styles.smallTitle}>Cùng xem lại các túi đồ bạn đã gửi đến Passdy</div>
      </div>
    </div>
  );
};

export default HeaderSellPage;
