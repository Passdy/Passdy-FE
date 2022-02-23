import { NextPage } from "next";
import Image from "next/image";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import cls from "classnames";
import styled from "styled-components";
import styles from "./Header.module.scss";
import Countdown from "./CountDown";

const NavItem = styled.div<{ isShow?: boolean }>`
  size: 14px;
  line-height: 24px;
  font-weight: 600;
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
            <span data-content="Shop">Shop</span>
            <div className="primary-line" />
          </NavItem>
          <NavItem
            onClick={() => setIsShowDropDown((value) => !value)}
            isShow={isShowDropDown}
            className={cls("ml-40")}
            ref={wrapperRef}
          >
            <span data-content="Sell">Sell</span>
            <div className="primary-line" />
            <div className="dropdownWrapper">
              <div className="menu-item">Bán & Từ thiện</div>
              <div className="menu-item">Quy trình bán</div>
              <div className="menu-item">Tài khoản bán</div>
            </div>
          </NavItem>
          <NavItem className={cls("ml-40")}>
            <span data-content="About us">About us</span>
            <div className="primary-line" />
          </NavItem>
          <NavItem className={cls("ml-40")}>
            <span data-content="Roadmap">Roadmap</span>
            <div className="primary-line" />
          </NavItem>
        </div>
        <div className={styles.mainLogo}>
          <span data-content="PassDy">PassDy</span>
        </div>
        <div className={styles.rightHeader}>
          <div className={styles.person}>
            <Image src="/icons/person.svg" width={24} height={24} />
          </div>
          <div className={styles.bagHandle}>
            <Image src="/icons/bag-handle.svg" width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
