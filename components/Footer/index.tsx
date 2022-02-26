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
          <div className={styles.bigTitle}>
            Trở thành một phần của cộng đồng “diện văn minh”!
          </div>
          <div className={styles.smallTitle}>
            Đăng ký để cập nhật thông tin về Passdy và thời trang bền vững cùng
            chúng mình nhé
          </div>
          <div className={styles.formWrapper}>
            <input placeholder="Email của bạn" ref={inputRef} />
            <button type="button">Đăng ký</button>
          </div>
        </div>
      </div>
      <div className={styles.infoFooter}>
        <div className={styles.columnInfoWrapper}>
          <div className={styles.columnInfo}>
            <div className={styles.titleColumn}>VỀ PASSDY</div>
            <div className={styles.itemWrapper}>
              <div className={styles.item}>Thông tin</div>
            </div>
          </div>
          <div className={styles.columnInfo}>
            <div className={styles.titleColumn}>TRỢ GIÚP</div>
            <div className={styles.itemWrapper}>
              <div className={styles.item}>FAQ</div>
              <div className={styles.item}>Địa chỉ</div>
              <div className={styles.item}>Shipping</div>
              <div className={styles.item}>Chính sách trả hàng</div>
            </div>
          </div>
          <div className={styles.columnInfo}>
            <div className={styles.titleColumn}>LIÊN LẠC</div>
            <div className={styles.itemWrapper}>
              <div className={styles.item}>Điện thoại: + 88 090 090 000</div>
              <div className={styles.item}>Gmail: passdy@gmail.com</div>
              <div className={styles.item}>Địa chỉ: 204, Hanoi, Vietnam</div>
            </div>
          </div>
        </div>
        <div className={styles.grayLine} />
        <div className={styles.lastLine}>Về bản quyền thuộc công ty TNHH PassDy. Bảo lưu mọi quyền</div>
      </div>
    </div>
  );
};

export default Footer;
