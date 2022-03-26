import React from "react";
import Link from "next/link";
import styles from "./breadcrumm.module.scss";

const Breadcrumb: React.FC = ({ children }) => (
  <div className={styles.webPath}>
    <Link href="/">Trang chủ/ </Link>
    {children}
  </div>
);

export default Breadcrumb;
