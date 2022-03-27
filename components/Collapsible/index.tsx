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
        <svg
          className={cls({ [styles.isReverseSvg]: isOpen })}
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
            fill="#000000"
          />
        </svg>
      </div>
      <div className={cls(styles.contentText, { [styles.isOpen]: isOpen })}>
        <div className={styles.breakLine} />
        {children}
      </div>
    </div>
  );
};

Collapsible.defaultProps = {
  className: "",
  borderTop: false,
};

export default Collapsible;
