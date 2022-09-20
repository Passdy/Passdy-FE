/* eslint-disable react/no-array-index-key */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @next/next/no-img-element */
import { Button, Grid } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Breadcrumb from "../../components/Shared/Breadcrumb";
import styles from "../../styles/Product.module.scss";

const ProductDetails: NextPage = () => {
  const imageItem = Array.from(Array(12));
  return (
    <div className={styles.mainDetails}>
      <Breadcrumb>
        <Link href="/sell-and-donate" passHref>
          Bán/
        </Link>
        <Link href="/sell-and-donate" passHref>
          <span> Áo phông nữ trắng</span>
        </Link>
      </Breadcrumb>
      <Button
        className={styles.btnBack}
        variant="text"
        startIcon={<ArrowBackIosIcon fontSize="inherit" />}
      >
        BACK
      </Button>
      <Grid container spacing={2}>
        <Grid item xs={2} className="flex flex-wrap gap-x-6 gap-y-4">
          {imageItem.map((item, index) => (
            <img key={index} src="/images/product-detail/item-1.png" alt="" />
          ))}
        </Grid>
        <Grid item xs={5}>
          <img src="/images/product-detail/main-image.png" alt="" />
        </Grid>
        <Grid item xs={5}>
          <div className={styles.titleProduct}>Áo Phông Trắng Levis</div>
          <div className="w-9/12">
            <div className="flex justify-between py-4">
              <div>White T-shirt</div>
              <div className="flex">
                <img src="/icons/like.svg" alt="" className="mr-3" /> 35 YÊU THÍCH
              </div>
            </div>
            <div>
              <div className={styles.titleSale}>FINAL SALE</div>
              <div className="flex">
                <div className={styles.priceProduct}>590,000 VND</div>
                <div className={styles.salePrice}>590,000 VND</div>
              </div>
              <div className="flex mt-2 mb-4">
                <div className={styles.firstSale}>1,225,000 VND</div>
                <div className="flex">
                  <div className={styles.percentSale}>Rẻ hơn 97% so với giá bán lẻ</div>
                  <img src="/icons/query.svg" alt="" className="ml-2" />
                </div>
              </div>
              <div className="flex justify-between">
                <div className={styles.size}>Size XS</div>
                <div className="flex">
                  <img src="/icons/ruler.svg" alt="" className="mr-2" />
                  <div className={styles.sizeTable}>Bảng Kích Cỡ</div>
                </div>
              </div>
              <div className={styles.code}>SKU# 447463 </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetails;
