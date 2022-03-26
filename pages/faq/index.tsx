import React from "react";
import { NextPage } from "next";
import cls from "classnames";
import styles from "./faq.module.scss";
import HeaderSellPage from "../../components/HeaderSellPage";

const FAQ: NextPage = () => (
  <div className={styles.wrapper}>
    <HeaderSellPage bigTitle="Câu hỏi thường gặp" smallTitle="" />
    <div className={styles.contentFaq}>
      <div className={styles.leftSide}>
        <div className={styles.itemLeft}>Người Mua</div>
        <div className={cls(styles.itemLeft, "mt-40")}>Người Bán</div>
        <div className={cls(styles.itemLeft, "mt-40")}>Hoán Trả/Đổi hàng</div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.bigTitle}>Người Mua</div>
      </div>
    </div>
  </div>
);

export default FAQ;
