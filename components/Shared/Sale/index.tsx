/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @next/next/no-img-element */
import { Grid } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import styles from "./Sale.module.scss";

const Sales: NextPage = () => (
  <div className={styles.seenProduct}>
    <div className={styles.titleSeen}>Ưu đãi</div>
    <Grid container spacing={2} className="pt-5">
      <Grid item xs={4}>
        <div className={styles.firstSale}>
          <div className={styles.titleSale}>Quần Jeans</div>
          <div className="text-xl font-normal mb-3">
            Chuẩn bị cho mùa hè đầy năng động với quần Jeans
          </div>
          <Link href="https://shopee.vn/passdyvn" passHref>
            <span className="underline cursor-pointer text-xl font-bold">MUA NGAY</span>
          </Link>
          <div>
            <div className={`text-center relative ${styles.mainSale}`}>
              <div>Chỉ từ</div>
              <div className={styles.salePrices}>290,000</div>
              <div className={styles.salePrices}>VND</div>
            </div>
            <div className={styles.imgSaleProduct}>
              <img src="/images/products/sale-image-1.png" alt="" />
            </div>
            <div className={styles.backgroundFirst}> </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className={styles.secondSale}>
          <div className={styles.titleSale}>Áo Phông</div>
          <div className="text-xl font-normal mb-3">
            Chuẩn bị cho mùa hè đầy năng động với quần Jeans
          </div>
          <Link href="https://shopee.vn/passdyvn" passHref>
            <span className="underline cursor-pointer text-xl font-bold">MUA NGAY</span>
          </Link>
          <div>
            <div className={`text-center ${styles.mainSale}`}>
              <div>Chỉ từ</div>
              <div className={styles.salePrices}>290,000</div>
              <div className={styles.salePrices}>VND</div>
              <div className={styles.imgSaleProductSecond}>
                <img src="/images/products/sale-image-2.png" alt="" />
              </div>
            </div>
            <div className={styles.backgroundFirst}> </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className={styles.thirdSale}>
          <div className={styles.titleSale}>Quần Jeans</div>
          <div className="text-xl font-normal mb-3">
            Chuẩn bị cho mùa hè đầy năng động với quần Jeans
          </div>
          <Link href="https://shopee.vn/passdyvn" passHref>
            <span className="underline cursor-pointer text-xl font-bold">MUA NGAY</span>
          </Link>
          <div>
            <div className={`text-center ${styles.mainSale}`}>
              <div>Chỉ từ</div>
              <div className={styles.salePrices}>290,000</div>
              <div className={styles.salePrices}>VND</div>
            </div>
            <div className={styles.imgSaleProduct}>
              <img src="/images/products/sale-image-3.png" alt="" className="w-6/12 float-right" />
            </div>
            <div className={styles.backgroundFirst}> </div>
          </div>
        </div>
      </Grid>
    </Grid>
  </div>
);

export default Sales;
