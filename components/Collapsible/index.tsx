import React, { useState } from "react";
import cls from "classnames";
import styles from "./Collapsible.module.scss";

type PropsType = {
  title: string;
  className?: string;
  children: React.ReactNode;
  borderTop?: boolean;
};
const Collapsible = ({ title, className, children, borderTop }: PropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className={cls(styles.wrapper, className, { [styles.borderTop]: borderTop })}>
      <div className={styles.title} onClick={() => setIsOpen((prev) => !prev)}>
        {title}
      </div>
      <div className={cls(styles.contentText, { [styles.isOpen]: isOpen })}>{children}</div>
    </div>
  );
};

Collapsible.defaultProps = {
  className: "",
  borderTop: false,
};

export default Collapsible;
