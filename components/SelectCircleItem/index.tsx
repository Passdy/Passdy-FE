import React from "react";
import cls from "classnames";
import styles from "./SelectCircleItem.module.scss";

interface IProps {
  label: string;
  isSelected: boolean;
  className?: string;
  onClick: () => void;
}

const SelectCircleItem = ({ label, isSelected, className, onClick }: IProps) => (
  <div onClick={onClick} className={cls(styles.wrapper, className)}>
    <div className={styles.circle}>{isSelected && <div className={styles.activeCircle} />}</div>
    <span>{label}</span>
  </div>
);

export default SelectCircleItem;
