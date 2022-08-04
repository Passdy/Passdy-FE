import { Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import { navBar } from "../Constant/ProductSidebar";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Product.module.scss";

const LayoutProducts: React.FC = ({ children }) => (
  <LayoutWrapper>
    <div className={styles.productWrapper}>
      <Grid container spacing={1} columns={18}>
        <Grid item xs={2} className="mt-8">
          <div className={styles.title}>NỮ</div>
          {navBar.map((item) => (
            <div key={item.id} className={styles.titleSidebar}>
              <Link href={item.path} passHref>
                {item.displayName}
              </Link>
            </div>
          ))}
          <div className={styles.divide}> </div>
          <div className={styles.titleSidebar}>Sắm thương hiệu</div>
          <div className={styles.titleSidebar}>Sắm theo outfit</div>
          <div className={styles.titleSidebar}>Sắm theo sự kiện</div>
        </Grid>
        <Grid item xs={16}>
          {children}
        </Grid>
      </Grid>
    </div>
  </LayoutWrapper>
);

export default LayoutProducts;
