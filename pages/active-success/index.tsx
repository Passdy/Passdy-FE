import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import styles from "./active.module.scss";
import commonStyles from "../../styles/common.module.scss";

const ActiveSuccess: NextPage = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <Image width="274px" height="294px" src="/images/passdy-logo1.png" />
      </div>
      <div className={styles.title}>
        Thành Công
      </div>
      <div className={styles.content}>
        Linh đã kích hoạt tài khoản thành công, cùng gia nhập cộng đồng
        <div>
          “Diện văn minh" của Passdy ngay nào 🎉!
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <a href="https://shopee.vn/passdyvn">
          <button type="button" className={commonStyles.button}>Mua Ngay</button>
        </a>
        <Link href="/add-sell-order" passHref>
          <button type="button" className={commonStyles.button}>Bán Ngay</button>
        </Link>
      </div>
    </div>
  </div>
);

export default ActiveSuccess;
