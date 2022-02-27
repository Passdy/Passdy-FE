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
        onMouseOut={() => setOnHover("")}
        onClick={() => onClickScroll("buy")}
        onMouseOver={() => setOnHover("buy-section")}
      >
        <span className={cls({ [styles.hoverItem]: onHover === "buy-section" })}>
          {(onHover === "buy-section" || selectedSection === "buy-section") && "Mua"}
        </span>
        <div className={styles.line} />
      </div>
      <div
        className={cls(styles.item, {
          [styles.isActive]: selectedSection === "sell-section",
        })}
        onMouseOut={() => setOnHover("")}
        onClick={() => onClickScroll("sell")}
        onMouseOver={() => setOnHover("sell-section")}
      >
        <span className={cls({ [styles.hoverItem]: onHover === "sell-section" })}>
          {(onHover === "sell-section" || selectedSection === "sell-section") && "Bán"}
        </span>
        <div className={styles.line} />
      </div>
      <div
        className={cls(styles.item, {
          [styles.isActive]: selectedSection === "roadmap-section",
        })}
        onMouseOut={() => setOnHover("")}
        onClick={() => onClickScroll("roadmap")}
        onMouseOver={() => setOnHover("roadmap-section")}
      >
        <span className={cls({ [styles.hoverItem]: onHover === "roadmap-section" })}>
          {(onHover === "roadmap-section" || selectedSection === "roadmap-section") && "Lộ trình"}
        </span>
        <div className={styles.line} />
      </div>
    </div>
  );
};

export default ScrollItem;
