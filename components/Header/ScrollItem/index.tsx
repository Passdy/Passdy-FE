import React, { useState } from "react";
import cls from "classnames";
import styles from "./ScrollItem.module.scss";

interface IProps {
  selectedSection: string;
  // eslint-disable-next-line no-unused-vars
  onClickScroll: (type: string) => void;
}

const ScrollItem = ({ selectedSection, onClickScroll }: IProps) => {
  const [onHover, setOnHover] = useState<string>("");

  return (
    <div className={styles.selectSectionWraper}>
      <div
        className={cls(styles.item, {
          [styles.isActive]: selectedSection === "buy-section",
        })}
      >
        <span className={cls({ [styles.hoverItem]: onHover === "buy-section" })}>Mua</span>
        <div
          onMouseOver={() => setOnHover("buy-section")}
          onMouseOut={() => setOnHover("")}
          onClick={() => onClickScroll("buy")}
          className={styles.line}
          data-content="Mua"
        />
      </div>
      <div
        className={cls(styles.item, {
          [styles.isActive]: selectedSection === "sell-section",
        })}
      >
        <span className={cls({ [styles.hoverItem]: onHover === "sell-section" })}>Bán</span>
        <div
          onMouseOver={() => setOnHover("sell-section")}
          onMouseOut={() => setOnHover("")}
          onClick={() => onClickScroll("sell")}
          className={styles.line}
          data-content="Bán"
        />
      </div>
      <div
        className={cls(styles.item, {
          [styles.isActive]: selectedSection === "roadmap-section",
        })}
      >
        <span className={cls({ [styles.hoverItem]: onHover === "roadmap-section" })}>Lộ trình</span>
        <div
          onMouseOver={() => setOnHover("roadmap-section")}
          onMouseOut={() => setOnHover("")}
          onClick={() => onClickScroll("roadmap")}
          className={styles.line}
        />
      </div>
    </div>
  );
};

export default ScrollItem;
