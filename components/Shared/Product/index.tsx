/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import LikeProduct from "../LikeProduct";
import styles from "./Product.module.scss";

const Product: NextPage = () => (
  <div className={styles.cardProduct}>
    <div className="relative">
      <div className={`absolute flex items-center ${styles.heartIcon}`}>
        <span className={`mr-1 font-bold ${styles.colorPrimary}`}>25</span>
        <LikeProduct />
      </div>
      <a href="/products/1">
        <img src="/images/example-Tshirt.png" alt="s" className={styles.cardImage} />
      </a>
    </div>
    <div className="flex mt-1">
      <div>
        <div className="font-medium text-sm">Uniqlo</div>
        <div className="text-slate-600 text-sm">Áo blouse</div>
        <div className="flex">
          <div className={`text-sm ${styles.priceRed}`}>250.000 VND</div>
          <div className={styles.salePrice}> 250.000 VND</div>
        </div>
      </div>
      <div className={`ml-auto text-xs ml-auto ${styles.colorBg5}`}>Size S</div>
    </div>
  </div>
);

export default Product;
