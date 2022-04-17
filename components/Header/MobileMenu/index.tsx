import React, { useMemo, useState } from "react";
import Modal from "react-modal";
import { useRouter } from "next/router";
import cls from "classnames";
import styles from "./MobileMenu.module.scss";

const listMenu: any = {
  sell: {
    label: "Bán",
    childItem: [
      {
        label: "Bán & Từ thiện",
        href: "/sell-and-donate",
      },
      {
        label: "Quy trình bán",
        href: "/sell-process",
      },
    ],
  },
};

const MobileMenu = ({
  isShow,
  onClose,
  onClickSellAndDonate,
}: {
  isShow: boolean;
  onClose: () => void;
  onClickSellAndDonate: () => void;
}) => {
  const [selectedMenu, setSelectedMenu] = useState<string>("");
  const router = useRouter();

  const selectedTabTitle = useMemo(() => (selectedMenu ? listMenu.sell.label : ""), [selectedMenu]);

  const onRedirect = (link: string) => {
    router.push(link);
    onClose();
  };

  const onRedirectSellAndDonate = () => {
    onClickSellAndDonate();
    onClose();
  };

  return (
    <Modal className={styles.modalContainer} isOpen={isShow} contentLabel="Example Modal">
      <div className={cls(styles.contentTab, { [styles.show]: !!selectedMenu })}>
        <div className={styles.modalHeader2}>
          <div onClick={() => setSelectedMenu("")} className={styles.titleWrapper}>
            <img src="/icons/angle-down.svg" alt="" />
            {selectedTabTitle}
          </div>
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
          <img
            onClick={onClose}
            className={styles.closeIcon2}
            src="/icons/close.png"
            width={14}
            alt=""
          />
        </div>
        <div className={styles.strokeLine} />
        <div className={styles.itemWrapper}>
          <div onClick={onRedirectSellAndDonate} className={styles.item}>
            Bán & từ Thiện
          </div>
          <div onClick={() => onRedirect("/sell-process")} className={styles.item}>
            Quy trình bán
          </div>
        </div>
      </div>
      <div className={styles.modalMainContent}>
        <div className={styles.modalHeader}>
          <img src="/images/main-logo.svg" width={150} alt="" />
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
          <img
            onClick={onClose}
            className={styles.closeIcon}
            src="/icons/close.png"
            width={14}
            alt=""
          />
        </div>
        <div className={styles.strokeLine} />
        <div className={styles.itemWrapper}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://shopee.vn/passdyvn"
            className={styles.item}
          >
            Mua
            <img src="/icons/angle-down.svg" alt="" />
          </a>
          <div onClick={() => setSelectedMenu("sell")} className={styles.item}>
            Bán
            <img src="/icons/angle-down.svg" alt="" />
          </div>
          <div onClick={() => onRedirect("/about")} className={styles.item}>
            Về Passdy
            <img src="/icons/angle-down.svg" alt="" />
          </div>
          <div onClick={() => onRedirect("/#roadmap-section")} className={styles.item}>
            Roadmap
            <img src="/icons/angle-down.svg" alt="" />
          </div>
        </div>
        <div className={styles.strokeLine} />
        <div onClick={() => onRedirect("/login")} className={styles.person}>
          <svg width="20" height="22" viewBox="0 0 20 22" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99998 11C7.52029 11 5.33591 8.67031 5.12497 5.80625C5.01716 4.35312 5.46716 3.00781 6.3906 2.01875C7.29997 1.03906 8.58435 0.5 9.99998 0.5C11.4062 0.5 12.6859 1.04375 13.6 2.02812C14.5281 3.02656 14.9781 4.36719 14.8703 5.80625C14.6594 8.67031 12.475 11 9.99998 11ZM9.99998 2C9.00623 2 8.11091 2.37031 7.48747 3.04062C6.85466 3.72031 6.54529 4.66719 6.62029 5.69844C6.77029 7.76094 8.31716 9.50469 9.99529 9.50469C11.6734 9.50469 13.2203 7.76094 13.3703 5.69844C13.4453 4.68125 13.1359 3.73906 12.4937 3.05C11.875 2.37031 10.9844 2 9.99998 2Z" />
            <path d="M18.25 21.4999H1.74998C1.29998 21.4999 0.896857 21.3124 0.615607 20.9796C0.31092 20.614 0.189045 20.1171 0.278107 19.6155C0.671857 17.4218 1.90936 15.5749 3.84998 14.2859C5.57498 13.1374 7.75936 12.5046 9.99998 12.5046C12.2406 12.5046 14.425 13.1374 16.15 14.2859C18.0906 15.5796 19.3281 17.4218 19.7219 19.6155C19.8109 20.1171 19.689 20.614 19.3844 20.9796C19.1031 21.3124 18.7 21.4999 18.25 21.4999ZM1.75936 19.9999H18.2406C18.25 19.9765 18.2547 19.939 18.2453 19.878C17.5187 15.8421 13.4594 13.9999 9.99998 13.9999C6.54061 13.9999 2.48123 15.8421 1.75467 19.878C1.74529 19.939 1.74998 19.9765 1.75936 19.9999Z" />
          </svg>
          Đăng nhập
        </div>
      </div>
    </Modal>
  );
};

export default MobileMenu;
