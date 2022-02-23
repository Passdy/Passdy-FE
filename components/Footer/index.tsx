import { NextPage } from "next";
import React, { useRef } from "react";
import Image from "next/image";
import styles from "./Footer.module.scss";

const Footer: NextPage = () => {
  const inputRef = useRef(null);

  return (
    <div className={styles.footerWrapper}>
      <div className={styles.subscribeWrapper}>
        <div className={styles.leftBalloonWrapper}>
          <img src="/images/footer-big-balloon.png" alt="" />
        </div>
        <div className={styles.rightBaloonWrapper}>
          <Image width="225px" height="225px" src="/images/footer-baloon.png" />
        </div>
        <div className={styles.socialColumn}>
          <div className={styles.whiteLogo}>PassDy</div>
          <div className={styles.socialLogo}>
            <Image width="24px" height="24px" src="/icons/instagram-logo.png" />
            <Image width="24px" height="24px" src="/icons/facebook-logo.png" />
            <Image width="24px" height="24px" src="/icons/whatsapp.png" />
          </div>
        </div>
        <div className={styles.subcribeColumn}>
          <div className={styles.bigTitle}>Subscribe newsletter</div>
          <div className={styles.smallTitle}>
            Lastest news and get early access to collection previews
          </div>
          <div className={styles.formWrapper}>
            <input placeholder="Enter your email" ref={inputRef} />
            <button type="button">Subscribe</button>
          </div>
        </div>
      </div>
      <div className={styles.infoFooter}>
        <div className={styles.columnInfoWrapper}>
          <div className={styles.columnInfo}>
            <div className={styles.titleColumn}>Help</div>
            <div className={styles.itemWrapper}>
              <div className={styles.item}>Contact us</div>
              <div className={styles.item}>Store Location</div>
              <div className={styles.item}>Delivery</div>
              <div className={styles.item}>Returns</div>
            </div>
          </div>
          <div className={styles.columnInfo}>
            <div className={styles.titleColumn}>SITE INFO</div>
            <div className={styles.itemWrapper}>
              <div className={styles.item}>Terms & Conditions</div>
              <div className={styles.item}>Privacy Policy</div>
              <div className={styles.item}>Cookie Policy</div>
              <div className={styles.item}>Contact us</div>
            </div>
          </div>
          <div className={styles.columnInfo}>
            <div className={styles.titleColumn}>COMPANY</div>
            <div className={styles.itemWrapper}>
              <div className={styles.item}>Careers</div>
              <div className={styles.item}>Licensing</div>
              <div className={styles.item}>Affiliates</div>
              <div className={styles.item}>Investor Relations</div>
            </div>
          </div>
          <div className={styles.columnInfo}>
            <div className={styles.titleColumn}>CONTACT</div>
            <div className={styles.itemWrapper}>
              <div className={styles.item}>Phone: + 88 090 090 000</div>
              <div className={styles.item}>Gmail: passdy@gmail.com</div>
              <div className={styles.item}>Address: 204, Hanoi, Vietnam</div>
            </div>
          </div>
        </div>
        <div className={styles.grayLine} />
        <div className={styles.lastLine}>
          Coppyright 2022 PassDy. By PassDy. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
