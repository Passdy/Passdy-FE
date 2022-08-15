/* eslint-disable @next/next/no-img-element */
import { Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import cls from "classnames";
import { navBar } from "../Constant/ProductSidebar";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Product.module.scss";
import UseReasonSection from "../UseReasonSection/UseReasonSection";

const LayoutProducts: React.FC = ({ children }) => (
  <LayoutWrapper>
    <div className={styles.productWrapper}>
      <Grid container spacing={1} columns={18}>
        <Grid item xs={2} className={styles.sidebar}>
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
    <div className={`${styles.trend}`}>
      <div className={styles.titleTop}>Cần tips phối đố và bắt kịp xu hướng mới nhất?</div>
      <div className={`py-11 ${styles.titleBot}`}>
        Ghé Instagram và Tiktok của Passdy ngay {">>"}
      </div>
      <div className="md:container">
        <Grid container spacing={1} columns={18}>
          <Grid item xs={2}>
            {" "}
          </Grid>
          <Grid item xs={16}>
            <Grid
              container
              spacing={3}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
              className={cls(styles.imageHowTow)}
              data-aos-once="true"
              data-aos-delay="600"
              data-aos-offset="100"
            >
              <Grid item xs={6}>
                <Link href="https://instagram.com/passdyvn?igshid=YmMyMTA2M2Y=" passHref>
                  <img src="/images/instagram-1.png" alt="" className="w-full cursor-pointer " />
                </Link>
                <Grid container spacing={3} className="pt-4">
                  <Grid item xs={6}>
                    <Link href="https://instagram.com/passdyvn?igshid=YmMyMTA2M2Y=" passHref>
                      <img src="/images/instagram-2.png" alt="" className="w-full cursor-pointer" />
                    </Link>
                  </Grid>
                  <Grid item xs={6}>
                    <Link href="https://instagram.com/passdyvn?igshid=YmMyMTA2M2Y=" passHref>
                      <img src="/images/instagram-3.png" alt="" className="w-full cursor-pointer" />
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Link href="https://instagram.com/passdyvn?igshid=YmMyMTA2M2Y=" passHref>
                  <img
                    src="/images/instagram-4.png"
                    alt=""
                    className="w-full h-full cursor-pointer"
                  />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
    <UseReasonSection />
  </LayoutWrapper>
);

export default LayoutProducts;
