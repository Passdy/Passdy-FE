import React, { useState } from "react";
import cls from "classnames";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";

const Footer = () => {
  const [isActiveInput, setIsActiveInput] = useState<boolean>(false);
  const [inputEmail, setInputEmail] = useState<string>("");

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
            <a href="https://www.instagram.com/passdyvn/">
              <Image width="24px" height="24px" src="/icons/instagram-logo.png" />
            </a>
            <a href="https://www.facebook.com/Passdy-Vi%E1%BB%87t-Nam-101658345804355">
              <Image width="24px" height="24px" src="/icons/facebook-logo.png" />
            </a>
          </div>
        </div>
        <div className={styles.subcribeColumn}>
          <div className={styles.bigTitle}>Trở thành một phần của cộng đồng “diện văn minh”!</div>
          <div className={styles.smallTitle}>
            Đăng ký để cập nhật thông tin về Passdy và thời trang bền vững cùng chúng mình nhé
          </div>
          <div className={styles.formWrapper}>
            <div
              className={cls(styles.formInput, {
                [styles.floatingText]: isActiveInput || inputEmail,
                [styles.activeInput]: isActiveInput || inputEmail,
              })}
            >
              <input
                onChange={(e) => setInputEmail(e.target.value)}
                value={inputEmail}
                onFocus={() => setIsActiveInput(true)}
                onBlur={() => setIsActiveInput(false)}
                name="email"
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="email">Email</label>
            </div>
            <button type="button">ĐĂNG KÝ</button>
          </div>
        </div>
      </div>
      <div className={styles.infoFooter}>
        <div className={styles.columnInfoWrapper}>
          <div className={styles.columnInfo}>
            <div className={styles.titleColumn}>VỀ PASSDY</div>
            <div className={styles.itemWrapper}>
              <div className={styles.item}>Sứ mệnh</div>
              <div className={styles.item}>Reviews</div>
            </div>
          </div>
          <div className={styles.columnInfo}>
            <div className={styles.titleColumn}>TRỢ GIÚP</div>
            <div className={styles.itemWrapper}>
              <div className={styles.item}>
                <Link href="/faq" passHref>
                  FAQ
                </Link>
              </div>
              <div className={styles.item}>Chính sách trả hàng</div>
            </div>
          </div>
          <div className={styles.columnInfo}>
            <div className={styles.titleColumn}>LIÊN LẠC</div>
            <div className={styles.itemWrapper}>
              <div className={cls(styles.item, "color-primary")}>Điện thoại: 094 8256677</div>
              <div className={styles.item}>Gmail: passdyvn@gmail.com</div>
              <div className={styles.item}>
                Số 7 ngách 3/2 phố Nhân Hòa, phường Nhân Chính, quận Thanh Xuân, Hà Nội
              </div>
            </div>
          </div>
        </div>
        <div className={styles.grayLine} />
        <div className={styles.lastLine}>
          Về bản quyền thuộc công ty TNHH PassDy. Bảo lưu mọi quyền
        </div>
      </div>
    </div>
  );
};

export default Footer;
