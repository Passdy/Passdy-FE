import React from "react";
import cls from "classnames";
import styles from "./ScrollItem.module.scss";

interface IProps {
  selectedSection: string;
  // eslint-disable-next-line no-unused-vars
  onClickScroll: (type: string) => void;
}

const ScrollItem = ({ selectedSection, onClickScroll }: IProps) => (
  <div className={styles.selectSectionWraper}>
    <div
      className={cls(styles.item, {
        [styles.isActive]: selectedSection === "buy-section",
      })}
    >
      <span>Mua</span>
      <div onClick={() => onClickScroll("buy")} className={styles.line} />
    </div>
    <div
      className={cls(styles.item, {
        [styles.isActive]: selectedSection === "sell-section",
      })}
    >
      <span>Bán</span>
      <div onClick={() => onClickScroll("sell")} className={styles.line} />
    </div>
    <div
      className={cls(styles.item, {
        [styles.isActive]: selectedSection === "roadmap-section",
      })}
    >
      <span>Lộ trình</span>
      <div onClick={() => onClickScroll("roadmap")} className={styles.line} />
    </div>
  </div>
);

export default ScrollItem;
