import React from "react";
import styles from "./Collapsible.module.scss";

type PropsType = {
  title: string;
  content: string;
};
const Collapsible = ({ title, content }: PropsType) => (
  <div className={styles.wrapper}>
    {title}
    {content}
  </div>
);

export default Collapsible;
