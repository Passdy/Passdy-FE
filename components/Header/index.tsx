import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import cls from "classnames";
import styled from "styled-components";
import styles from "./Header.module.scss";
import Countdown from "./CountDown";
import { useRouter } from "next/router";
import ReactTooltip from "react-tooltip";

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
  const router = useRouter();
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setIsShowDropDown(false));

  return (
    <div className={styles.headerWrapper}>
      <Countdown />
      <div className={styles.navBarWrapper}>
        <div className={styles.navBar}>
          <NavItem>
            <Link href="https://shopee.vn/passdyvn" passHref>
              <span className="menu-item">Mua</span>
            </Link>
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
            </div>
          </NavItem>
          <NavItem className={cls("ml-40")}>
            <Link href="/about" passHref>
              <span data-content="Về Passdy">Về Passdy</span>
            </Link>
            <div className="primary-line" />
          </NavItem>
          <NavItem className={cls("ml-40")}>
            <Link href="/#roadmap-section" passHref>
              <span data-content="Lộ trình phát triển">Lộ trình phát triển</span>
            </Link>

            <div className="primary-line" />
          </NavItem>
        </div>
        <div className={styles.mainLogo}>
          <div onClick={() => router.push("/")} className={styles.logoWrapper}>
            <img src="/images/main-logo.svg" alt="" />
            <svg width="180" height="43" viewBox="0 0 180 43" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.5425 3.21493C24.7955 5.354 25.922 8.42971 25.922 12.442C25.922 17.1632 24.517 20.8718 21.7198 23.5551C18.9225 26.2511 15.0494 27.5927 10.1131 27.5927H5.08819V29.2508L5.35402 42.4776H0L0.3291 29.7065L0 0.0632803L12.961 0C17.0872 0.0126572 20.2895 1.07586 22.5425 3.21493ZM18.3403 19.9857C19.7706 18.2264 20.492 15.8595 20.492 12.9104C20.492 7.44244 17.5809 4.59457 11.7586 4.3794L5.34135 4.58192L5.13883 23.1754L12.0876 23.3019C14.8216 22.8589 16.8974 21.7451 18.3403 19.9857Z" />
              <path d="M56.5398 42.4778H51.5782L50.7808 38.9084L49.0594 34.0101L41.1866 33.9468L34.1745 34.0101L32.3898 38.6426L31.4659 42.4778H26.5675L39.2753 9.53101H44.9711L56.5398 42.4778ZM47.6798 29.9724L42.1865 14.3534H41.7941L35.7693 29.9724L41.5916 30.0357L47.6798 29.9724Z" />
              <path d="M145.419 13.3027C148.089 15.9987 149.418 19.8464 149.418 24.884C149.418 30.6684 147.963 35.0984 145.052 38.1868C142.141 41.2751 137.976 42.8193 132.546 42.8193C131.002 42.8193 129.167 42.7813 127.028 42.718C124.889 42.6547 122.876 42.5788 120.978 42.4902L121.18 32.5669L120.978 9.54348L133.875 9.27768C138.9 9.26502 142.748 10.6193 145.419 13.3027ZM141.52 35.5667C143.444 33.4276 144.394 30.2001 144.394 25.8713C144.394 21.6311 143.495 18.5048 141.685 16.4796C139.875 14.4545 137.141 13.4419 133.483 13.4419C131.319 13.4419 128.787 13.5305 125.876 13.7077L125.749 32.1619L125.813 38.3766C127.091 38.4652 128.433 38.5538 129.85 38.6424C131.255 38.731 132.432 38.769 133.356 38.769C136.875 38.769 139.596 37.7058 141.52 35.5667Z" />
              <path d="M167.62 33.0228L167.822 42.4778H162.86L163.126 33.0228L163.063 30.9723L151.887 9.53101H157.317L157.975 11.4549L165.379 25.6183H165.708L173.784 11.6574L174.644 9.54367H179.935L167.695 30.985L167.62 33.0228Z" />
              <path d="M110.662 10.7838L109.801 15.6822L109.017 15.8721C107.776 14.8974 106.612 14.1886 105.511 13.7203C104.409 13.252 103.258 13.0242 102.068 13.0242C100.169 13.0242 98.663 13.5178 97.5745 14.5177C96.4733 15.5177 95.9164 16.6441 95.9164 17.9352C95.9164 18.4162 95.9923 18.8592 96.1442 19.2768V19.2895C96.2075 19.4414 96.2708 19.6059 96.3594 19.7452C96.3721 19.7831 96.3974 19.8211 96.4227 19.8591C95.7645 19.7958 95.1063 19.7578 94.4482 19.7578C94.271 19.7578 94.0938 19.7578 93.9166 19.7705C92.9293 19.7958 92.0053 19.897 91.132 20.0743C91.1067 19.973 91.094 19.8591 91.0813 19.7452C91.0307 19.3781 91.0054 18.9984 91.0054 18.606C91.0054 16.8467 91.4864 15.2519 92.4357 13.8469C93.385 12.4293 94.7266 11.3155 96.4733 10.4801C98.2074 9.6447 100.258 9.21436 102.587 9.21436C104.865 9.21436 107.156 9.60673 109.447 10.3662C109.852 10.4801 110.257 10.632 110.662 10.7838Z" />
              <path d="M111.586 33.1239C111.586 33.3897 111.573 33.6428 111.561 33.8833C111.548 33.9972 111.535 34.1238 111.523 34.2251C111.51 34.3769 111.485 34.5162 111.459 34.6554C111.434 34.8326 111.396 35.0098 111.358 35.1617V35.1744C111.32 35.3262 111.295 35.4781 111.244 35.63C111.232 35.63 111.232 35.6427 111.232 35.6427C111.105 36.111 110.978 36.4148 110.953 36.5034C110.814 36.8451 110.662 37.1362 110.523 37.3767C110.485 37.44 110.46 37.4906 110.422 37.5412C110.358 37.6678 110.282 37.807 110.194 37.9336C109.27 39.4145 107.915 40.6043 106.118 41.5156C105.498 41.832 104.827 42.0852 104.106 42.3004C102.789 42.6801 101.334 42.8699 99.7262 42.8699C99.182 42.8699 98.6377 42.8446 98.0808 42.8067C97.0429 42.7181 95.967 42.5535 94.8659 42.313C93.1698 41.9333 91.5876 41.3764 90.132 40.6296L90.3219 39.0095L90.7269 35.4022L91.3851 35.1364C92.6255 36.3768 94.0684 37.3261 95.7139 38.0222C97.372 38.7057 98.9035 39.0475 100.321 39.0475C100.726 39.0475 101.119 39.0221 101.486 38.9715C102.815 38.807 103.954 38.3387 104.878 37.5539C105.283 37.2122 105.637 36.8451 105.89 36.4527C105.954 36.3515 106.03 36.2249 106.118 36.073C106.169 35.9844 106.219 35.8958 106.245 35.8072C106.333 35.6174 106.409 35.4148 106.485 35.1744C106.523 35.0731 106.536 34.9718 106.561 34.8706C106.574 34.8326 106.586 34.782 106.586 34.7313C106.624 34.4782 106.65 34.2251 106.65 33.9593C106.65 33.9339 106.637 33.9213 106.637 33.896C106.637 33.8327 106.624 33.7694 106.624 33.6935C106.612 33.6428 106.624 33.5922 106.612 33.5542C106.599 33.4403 106.586 33.3264 106.561 33.2251C106.473 32.8074 106.232 32.0986 105.549 31.2633C105.397 31.0987 105.219 30.9468 105.017 30.795C104.194 30.1874 103.169 29.428 101.511 28.7571C99.9034 28.2382 98.1821 28.0357 96.7265 27.9218C96.2455 27.8838 95.8025 27.8585 95.3848 27.8205C93.9292 27.7192 92.7394 27.7572 91.094 27.8078C90.3092 27.8332 89.6257 27.8838 88.9423 27.9344C88.5372 27.9724 88.1195 27.9977 87.7145 28.0357C86.7652 28.1243 86.0438 28.1622 85.4615 28.2002C84.9173 28.2382 84.4996 28.2508 84.1072 28.2762C83.9933 28.2888 83.8794 28.2888 83.7655 28.3015C83.082 28.3395 82.3985 28.3774 81.715 28.4027C81.1707 28.4281 80.6138 28.4407 80.0569 28.4407C79.6645 28.4534 79.2722 28.4534 78.8671 28.4407C77.1457 28.4154 75.437 28.3901 73.4372 28.0104C72.4119 27.8078 71.1462 27.5674 69.8299 27.099C69.8172 27.0864 69.8046 27.0864 69.7919 27.0737C68.9692 26.7953 68.1338 26.4156 67.3237 25.9093C66.5517 25.4409 65.8175 24.8587 65.1214 24.1246C65.1087 24.1119 65.1087 24.0993 65.0961 24.0993C65.0075 23.998 64.9062 23.9094 64.8176 23.7955C64.767 23.7449 64.7164 23.6816 64.6531 23.6183C64.6404 23.6056 64.6278 23.5803 64.6024 23.5677C64.5392 23.4791 64.4632 23.4031 64.3999 23.3145C64.286 23.188 64.1721 23.0487 64.0708 22.8968C63.5266 22.1501 63.0076 21.1755 62.7798 19.9351C62.3621 17.5808 63.2354 15.6949 63.5898 15.0114C63.7797 14.619 63.9949 14.2266 64.2354 13.8596C65.1847 12.442 66.5263 11.3281 68.273 10.4928C70.0197 9.6574 72.0575 9.22705 74.3865 9.22705C76.1205 9.22705 77.8672 9.44222 79.6013 9.89788C80.5506 10.1384 81.4998 10.4421 82.4618 10.8092L81.8163 14.4798L81.6011 15.7075L80.8037 15.8974C80.5505 15.6949 80.31 15.505 80.0569 15.3405C79.095 14.6443 78.171 14.1254 77.2976 13.7583C76.1838 13.29 75.0447 13.0622 73.8549 13.0622C73.4245 13.0622 73.0195 13.0875 72.6271 13.1381C71.2981 13.3153 70.2096 13.7836 69.3489 14.5557C68.8679 14.9861 68.5009 15.4417 68.2351 15.9227C67.8807 16.5556 67.6908 17.2391 67.6908 17.9732C67.6908 18.0998 67.7035 18.2263 67.7161 18.3529C67.7161 18.3656 67.7161 18.3909 67.7288 18.4035C67.7414 18.4542 67.7414 18.5174 67.7541 18.5681C67.7667 18.6187 67.7667 18.6693 67.7794 18.7326C67.792 18.7706 67.8047 18.8339 67.8174 18.8972C67.8301 18.9478 67.8427 19.0111 67.868 19.0744C67.906 19.2263 67.9693 19.3655 68.0325 19.5047C68.0832 19.6186 68.1465 19.7452 68.2224 19.8718C68.2224 19.8844 68.2351 19.8844 68.2351 19.8971C68.2984 20.011 68.3616 20.1249 68.4376 20.2262C68.5009 20.3148 68.5642 20.4034 68.6401 20.4793C68.7414 20.5932 68.8426 20.6945 68.9439 20.7831C69.0072 20.8337 69.0578 20.897 69.1211 20.9476C69.1844 20.9983 69.2476 21.0489 69.3236 21.0995C69.3869 21.1501 69.4628 21.2008 69.5261 21.2514C69.5514 21.2767 69.5641 21.2767 69.5767 21.2894C69.64 21.34 69.6907 21.3653 69.7539 21.4033C69.7919 21.4286 69.8172 21.4539 69.8425 21.4666C69.8678 21.4792 69.8932 21.5046 69.9311 21.5172C70.2349 21.6944 70.5767 21.8716 70.9311 22.0361C72.3487 22.6943 74.1333 23.2386 75.956 23.6183C77.1458 23.8714 78.3482 24.0487 79.4493 24.1373C80.0442 24.1752 80.6391 24.2005 80.6391 24.2005C81.7023 24.2385 82.677 24.2132 83.9427 24.1626C84.9679 24.1246 85.8412 24.0613 86.7272 23.9854C86.9298 23.96 87.1323 23.9474 87.3475 23.9347C88.436 23.8461 89.5625 23.7449 90.9294 23.6943C90.9294 23.6943 91.6762 23.6689 92.7901 23.6563H93.0052C93.7773 23.6563 94.7013 23.6689 95.6759 23.7069C98.6503 23.8461 100.891 23.96 102.802 24.3524C103.928 24.5803 104.928 24.9093 105.916 25.403C106.207 25.5549 106.473 25.7067 106.738 25.8586C106.764 25.8713 106.789 25.8839 106.814 25.8966C106.966 25.9852 107.131 26.0865 107.308 26.2004C107.472 26.3016 107.637 26.4029 107.802 26.5295C107.89 26.5928 107.966 26.6434 108.042 26.7067C109.017 27.4028 110.105 28.4154 110.801 29.871C110.877 30.0102 110.941 30.1621 111.004 30.3266C111.054 30.4532 111.105 30.5798 111.143 30.7064C111.206 30.9215 111.27 31.1367 111.32 31.3392C111.346 31.4278 111.358 31.5038 111.371 31.5797C111.384 31.605 111.384 31.6303 111.384 31.6556C111.409 31.7696 111.421 31.8835 111.434 31.9974C111.459 32.1872 111.485 32.3771 111.497 32.5796C111.497 32.5923 111.497 32.5923 111.497 32.5923C111.573 32.7188 111.586 32.9214 111.586 33.1239Z" />
              <path d="M83.4744 33.149C83.4744 34.8704 83.0061 36.4652 82.0821 37.9334C81.1581 39.4143 79.8038 40.6041 78.0065 41.5154C76.2218 42.4141 74.0954 42.8698 71.6272 42.8698C70.6146 42.8698 69.5767 42.7812 68.5009 42.6293C67.9313 42.5407 67.3617 42.4394 66.7668 42.3128C65.0581 41.9331 63.4886 41.3762 62.0331 40.6294L62.1217 39.8827L62.6279 35.4653L62.6406 35.402L62.6532 35.3893L63.2988 35.1235C64.5265 36.364 65.9821 37.3133 67.6275 38.0094C68.1085 38.2119 68.5895 38.3891 69.0578 38.5157C70.1843 38.8574 71.2348 39.022 72.2221 39.022C74.0827 39.022 75.6016 38.5283 76.7914 37.5284C77.9812 36.5412 78.576 35.3387 78.576 33.9211C78.576 33.4528 78.5128 33.0224 78.3735 32.6301C78.3356 32.5035 78.2849 32.3769 78.2216 32.263C78.171 32.1364 78.0951 32.0099 78.0191 31.8833C78.1077 31.9086 78.1963 31.9213 78.2849 31.9339C78.4621 31.9592 78.6393 31.9845 78.8165 32.0225C80.3227 32.225 81.8542 32.2757 83.4111 32.1618C83.4237 32.1871 83.4237 32.225 83.4237 32.263C83.4491 32.5668 83.4744 32.8579 83.4744 33.149Z" />
              <path d="M83.4237 32.276H78.2216C78.171 32.1494 78.0951 32.0228 78.0191 31.8962C78.1077 31.9216 78.1963 31.9342 78.2849 31.9469C78.4621 31.9722 78.6393 31.9975 78.8165 32.0355C80.3227 32.238 81.8542 32.2886 83.4111 32.1747C83.4237 32.2127 83.4237 32.2506 83.4237 32.276Z" />
              <path d="M96.4227 19.8593C95.7645 19.796 95.1063 19.758 94.4482 19.758C94.271 19.758 94.0938 19.758 93.9166 19.7707C92.9293 19.796 92.0053 19.8973 91.132 20.0745C91.1067 19.9732 91.094 19.8593 91.0813 19.7454H96.3467C96.3594 19.7833 96.3847 19.8087 96.4227 19.8593Z" />
            </svg>
          </div>
        </div>
        <div className={styles.rightHeader}>
          <div className={styles.person}>
            <Link href="/profile" passHref>
              <svg width="20" height="22" viewBox="0 0 20 22" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99998 11C7.52029 11 5.33591 8.67031 5.12497 5.80625C5.01716 4.35312 5.46716 3.00781 6.3906 2.01875C7.29997 1.03906 8.58435 0.5 9.99998 0.5C11.4062 0.5 12.6859 1.04375 13.6 2.02812C14.5281 3.02656 14.9781 4.36719 14.8703 5.80625C14.6594 8.67031 12.475 11 9.99998 11ZM9.99998 2C9.00623 2 8.11091 2.37031 7.48747 3.04062C6.85466 3.72031 6.54529 4.66719 6.62029 5.69844C6.77029 7.76094 8.31716 9.50469 9.99529 9.50469C11.6734 9.50469 13.2203 7.76094 13.3703 5.69844C13.4453 4.68125 13.1359 3.73906 12.4937 3.05C11.875 2.37031 10.9844 2 9.99998 2Z" />
                <path d="M18.25 21.4999H1.74998C1.29998 21.4999 0.896857 21.3124 0.615607 20.9796C0.31092 20.614 0.189045 20.1171 0.278107 19.6155C0.671857 17.4218 1.90936 15.5749 3.84998 14.2859C5.57498 13.1374 7.75936 12.5046 9.99998 12.5046C12.2406 12.5046 14.425 13.1374 16.15 14.2859C18.0906 15.5796 19.3281 17.4218 19.7219 19.6155C19.8109 20.1171 19.689 20.614 19.3844 20.9796C19.1031 21.3124 18.7 21.4999 18.25 21.4999ZM1.75936 19.9999H18.2406C18.25 19.9765 18.2547 19.939 18.2453 19.878C17.5187 15.8421 13.4594 13.9999 9.99998 13.9999C6.54061 13.9999 2.48123 15.8421 1.75467 19.878C1.74529 19.939 1.74998 19.9765 1.75936 19.9999Z" />
              </svg>
            </Link>
          </div>
          <div
            data-background-color="#000000"
            data-effect="solid"
            data-tip="Tính năng sắp được update trong thời gian tới bạn nha!"
            className={styles.bagHandle}
          >
            <svg width="20" height="22" viewBox="0 0 20 22" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 2C9.00544 2 8.05161 2.39509 7.34835 3.09835C6.64509 3.80161 6.25 4.75544 6.25 5.75V6.5H13.75V5.75C13.75 4.75544 13.3549 3.80161 12.6517 3.09835C11.9484 2.39509 10.9946 2 10 2ZM4.75 5.75V6.5H1.75C1.35217 6.5 0.970644 6.65804 0.68934 6.93934C0.408036 7.22064 0.25 7.60217 0.25 8V18.125C0.25 19.9567 1.79329 21.5 3.625 21.5H16.375C18.1846 21.5 19.75 20.0371 19.75 18.1836V8C19.75 7.60218 19.592 7.22064 19.3107 6.93934C19.0294 6.65804 18.6478 6.5 18.25 6.5H15.25V5.75C15.25 4.35761 14.6969 3.02226 13.7123 2.03769C12.7277 1.05312 11.3924 0.5 10 0.5C8.60761 0.5 7.27226 1.05312 6.28769 2.03769C5.30312 3.02226 4.75 4.35761 4.75 5.75ZM1.75 8H5.5H14.5H18.25V18.1836C18.25 19.1651 17.4004 20 16.375 20H3.625C2.62171 20 1.75 19.1283 1.75 18.125L1.75 8ZM6.25 9.5C6.25 9.08579 5.91421 8.75 5.5 8.75C5.08579 8.75 4.75 9.08579 4.75 9.5V10.25C4.75 11.6424 5.30312 12.9777 6.28769 13.9623C7.27226 14.9469 8.60761 15.5 10 15.5C11.3924 15.5 12.7277 14.9469 13.7123 13.9623C14.6969 12.9777 15.25 11.6424 15.25 10.25V9.5C15.25 9.08579 14.9142 8.75 14.5 8.75C14.0858 8.75 13.75 9.08579 13.75 9.5V10.25C13.75 11.2446 13.3549 12.1984 12.6517 12.9017C11.9484 13.6049 10.9946 14 10 14C9.00544 14 8.05161 13.6049 7.34835 12.9017C6.64509 12.1984 6.25 11.2446 6.25 10.25V9.5Z"
              />
            </svg>
          </div>
          <ReactTooltip />
        </div>
      </div>
    </div>
  );
};
export default Header;
