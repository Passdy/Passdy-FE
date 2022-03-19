import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import cls from "classnames";
import styled from "styled-components";
import styles from "./Header.module.scss";
import Countdown from "./CountDown";

const NavItem = styled.div<{ isShow?: boolean }>`
  size: 14px;
  line-height: 24px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  position: relative;

  .primary-line {
    transition: width 0.5s;
    background-color: ${(props) => props.theme.color.primary};
    height: 2px;
    width: 0;
  }

  .dropdownWrapper {
    display: ${(props) => (props.isShow ? "block" : "none")};
    position: absolute;
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    padding: 10px 10px 10px 0;
    top: 67px;

    .menu-item {
      padding: 10px 20px;

      &:hover {
        text-decoration: underline;
        text-underline-offset: 4px;
      }
    }
  }

  &:hover {
    .primary-line {
      width: 100%;
    }
  }

  span {
    position: relative;
    display: inline-block;
    overflow: hidden;
    transition: clip-path 500ms ease;
    cursor: pointer;
    color: #000000;
    font-family: LatoMedium, sans-serif;
    font-weight: 500;

    &:hover::before {
      clip-path: ellipse(115% 115% at 50% 0%);
    }

    &::before {
      position: absolute;
      content: attr(data-content);
      color: ${(props) => props.theme.color.primary};
      clip-path: ellipse(0% 0% at 50% 0%);
      transition: clip-path 500ms ease;
    }
  }
`;

function useOutsideAlerter(ref: MutableRefObject<any>, onClick: Function) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClick();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const Header: NextPage = () => {
  const [isShowDropDown, setIsShowDropDown] = useState<boolean>(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setIsShowDropDown(false));

  return (
    <div className={styles.headerWrapper}>
      <Countdown />
      <div className={styles.navBarWrapper}>
        <div className={styles.navBar}>
          <NavItem>
            <span data-content="Mua">Mua</span>
            <div className="primary-line" />
          </NavItem>
          <NavItem
            onClick={() => setIsShowDropDown((value) => !value)}
            isShow={isShowDropDown}
            className={cls("ml-40")}
            ref={wrapperRef}
          >
            <span data-content="Bán">Bán</span>
            <div className="primary-line" />
            <div className="dropdownWrapper">
              <Link href="/sell-and-donate" passHref>
                <div className="menu-item">Bán & Từ thiện</div>
              </Link>
              <Link href="/sell-process" passHref>
                <div className="menu-item">Quy trình bán</div>
              </Link>
              <div className="menu-item">Tài khoản bán</div>
            </div>
          </NavItem>
          <NavItem className={cls("ml-40")}>
            <Link href="/#buy-section">
              <span data-content="Về Passdy">Về Passdy</span>
            </Link>
            <div className="primary-line" />
          </NavItem>
          <NavItem className={cls("ml-40")}>
            <Link href="/#roadmap-section">
              <span data-content="Lộ trình phát triển">Lộ trình phát triển</span>
            </Link>

            <div className="primary-line" />
          </NavItem>
        </div>
        <div className={styles.mainLogo}>
          <span data-content="PassDy">PassDy</span>
        </div>
        <div className={styles.rightHeader}>
          <div className={styles.person}>
            <svg width="20" height="22" viewBox="0 0 20 22" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99998 11C7.52029 11 5.33591 8.67031 5.12497 5.80625C5.01716 4.35312 5.46716 3.00781 6.3906 2.01875C7.29997 1.03906 8.58435 0.5 9.99998 0.5C11.4062 0.5 12.6859 1.04375 13.6 2.02812C14.5281 3.02656 14.9781 4.36719 14.8703 5.80625C14.6594 8.67031 12.475 11 9.99998 11ZM9.99998 2C9.00623 2 8.11091 2.37031 7.48747 3.04062C6.85466 3.72031 6.54529 4.66719 6.62029 5.69844C6.77029 7.76094 8.31716 9.50469 9.99529 9.50469C11.6734 9.50469 13.2203 7.76094 13.3703 5.69844C13.4453 4.68125 13.1359 3.73906 12.4937 3.05C11.875 2.37031 10.9844 2 9.99998 2Z" />
              <path d="M18.25 21.4999H1.74998C1.29998 21.4999 0.896857 21.3124 0.615607 20.9796C0.31092 20.614 0.189045 20.1171 0.278107 19.6155C0.671857 17.4218 1.90936 15.5749 3.84998 14.2859C5.57498 13.1374 7.75936 12.5046 9.99998 12.5046C12.2406 12.5046 14.425 13.1374 16.15 14.2859C18.0906 15.5796 19.3281 17.4218 19.7219 19.6155C19.8109 20.1171 19.689 20.614 19.3844 20.9796C19.1031 21.3124 18.7 21.4999 18.25 21.4999ZM1.75936 19.9999H18.2406C18.25 19.9765 18.2547 19.939 18.2453 19.878C17.5187 15.8421 13.4594 13.9999 9.99998 13.9999C6.54061 13.9999 2.48123 15.8421 1.75467 19.878C1.74529 19.939 1.74998 19.9765 1.75936 19.9999Z" />
            </svg>
          </div>
          <div className={styles.bagHandle}>
            <svg width="20" height="22" viewBox="0 0 20 22" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 2C9.00544 2 8.05161 2.39509 7.34835 3.09835C6.64509 3.80161 6.25 4.75544 6.25 5.75V6.5H13.75V5.75C13.75 4.75544 13.3549 3.80161 12.6517 3.09835C11.9484 2.39509 10.9946 2 10 2ZM4.75 5.75V6.5H1.75C1.35217 6.5 0.970644 6.65804 0.68934 6.93934C0.408036 7.22064 0.25 7.60217 0.25 8V18.125C0.25 19.9567 1.79329 21.5 3.625 21.5H16.375C18.1846 21.5 19.75 20.0371 19.75 18.1836V8C19.75 7.60218 19.592 7.22064 19.3107 6.93934C19.0294 6.65804 18.6478 6.5 18.25 6.5H15.25V5.75C15.25 4.35761 14.6969 3.02226 13.7123 2.03769C12.7277 1.05312 11.3924 0.5 10 0.5C8.60761 0.5 7.27226 1.05312 6.28769 2.03769C5.30312 3.02226 4.75 4.35761 4.75 5.75ZM1.75 8H5.5H14.5H18.25V18.1836C18.25 19.1651 17.4004 20 16.375 20H3.625C2.62171 20 1.75 19.1283 1.75 18.125L1.75 8ZM6.25 9.5C6.25 9.08579 5.91421 8.75 5.5 8.75C5.08579 8.75 4.75 9.08579 4.75 9.5V10.25C4.75 11.6424 5.30312 12.9777 6.28769 13.9623C7.27226 14.9469 8.60761 15.5 10 15.5C11.3924 15.5 12.7277 14.9469 13.7123 13.9623C14.6969 12.9777 15.25 11.6424 15.25 10.25V9.5C15.25 9.08579 14.9142 8.75 14.5 8.75C14.0858 8.75 13.75 9.08579 13.75 9.5V10.25C13.75 11.2446 13.3549 12.1984 12.6517 12.9017C11.9484 13.6049 10.9946 14 10 14C9.00544 14 8.05161 13.6049 7.34835 12.9017C6.64509 12.1984 6.25 11.2446 6.25 10.25V9.5Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
