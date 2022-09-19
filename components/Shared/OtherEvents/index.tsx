/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { SETTINGS_BANNER } from "../Constant/SettingSlider";
import SlickSlider from "../SlickSlider";
import styles from "./Events.module.scss";

const OtherEvents: NextPage = () => (
  <div className={`pb-5 ${styles.seenProduct}`}>
    <div className={styles.titleSeen}>Các sự kiện khác</div>
    <SlickSlider settings={SETTINGS_BANNER}>
      <div className={styles.productList}>
        <div className={styles.thumbnail}>
          <img src="/images/products/slider-1.png" alt="" className="w-full" />
          <div className={`font-bold ${styles.titleSlider}`}>Cháy phố</div>
        </div>
      </div>
      <div className={styles.productList}>
        <div className={styles.thumbnail}>
          <img src="/images/products/slider-2.png" alt="" className="w-full" />
          <div className={`font-bold ${styles.titleSlider}`}>CÔNG SỞ</div>
        </div>
      </div>
      <div className={styles.productList}>
        <div className={styles.thumbnail}>
          <img src="/images/products/slider-3.png" alt="" className="w-full" />
          <div className={`font-bold ${styles.titleSlider}`}>BEACH PARTY </div>
        </div>
      </div>
      <div className={styles.productList}>
        <div className={styles.thumbnail}>
          <img src="/images/products/slider-3.png" alt="" className="w-full" />
          <div className={`font-bold ${styles.titleSlider}`}>BEACH PARTY </div>
        </div>
      </div>
    </SlickSlider>
  </div>
);
export default OtherEvents;
