/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @next/next/no-img-element */
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Grid, Tab, Tabs } from "@mui/material";
import cls from "classnames";
import { NextPage } from "next";
import Link from "next/link";
import { ReactNode, SyntheticEvent, useState } from "react";
import Breadcrumb from "../../components/Shared/Breadcrumb";
import LikeProduct from "../../components/Shared/LikeProduct";
import OtherEvents from "../../components/Shared/OtherEvents";
import Product from "../../components/Shared/Product";
import UseReasonSection from "../../components/Shared/UseReasonSection/UseReasonSection";
import styles from "../../styles/Product.module.scss";

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProductDetails: NextPage = () => {
  const imageItem = Array.from(Array(12));
  const imageProduct = Array.from(Array(4));
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
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
          href="/products"
        >
          BACK
        </Button>
        <Grid container spacing={2} columns={28}>
          <Grid item xs={4} className="flex flex-wrap gap-x-6 gap-y-4">
            {imageItem.map((item, index) => (
              <img key={index} src="/images/product-detail/item-1.png" alt="" />
            ))}
          </Grid>
          <Grid item xs={11}>
            <img src="/images/product-detail/main-image.png" alt="" />
          </Grid>
          <Grid item xs={13}>
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
            <div className="flex items-center gap-x-2.5 mt-6 mb-4">
              <Button className={styles.btnAdd} size="large" variant="contained">
                Thêm vào giỏ hàng
              </Button>
              <div className={styles.borderIconLike}>
                <LikeProduct />
              </div>
              <div className={styles.borderIconChat}>
                <img src="/icons/chat.svg" alt="" className="" />
              </div>
            </div>
            <div className="w-9/12">
              <div className="flex items-center gap-x-2.5">
                <img src="/icons/stock.svg" alt="" />
                <div className={styles.stockTitle}>Đang còn hàng</div>
              </div>
              <div className="flex items-center gap-x-2.5 mt-2">
                <img src="/icons/ship.svg" alt="" />
                <div className={`underline ${styles.stockTitle}`}>
                  MIỄN PHÍ shipping với đơn trên 200,000 VND
                </div>
              </div>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  className="tab-description"
                  variant="fullWidth"
                >
                  <Tab label={<div className={styles.textTab}>Tổng quan</div>} {...a11yProps(0)} />
                  <Tab label={<div className={styles.textTab}>Chất liệu</div>} {...a11yProps(1)} />
                  <Tab
                    label={<div className={styles.textTab}>Chính sách hoàn trả giá</div>}
                    {...a11yProps(2)}
                  />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                Item One
              </TabPanel>
              <TabPanel value={value} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={cls(styles.suitableShop)}>
        <div className={styles.container}>
          <div className={styles.titleSection}>
            Ảnh hưởng xanh của<span className={styles.secondaryColor}> áo phông </span> đã sử dụng
          </div>
          <div className={styles.titleBottom}>
            This is what you’ll save by choosing a used top instead of new. Thrifting makes a
            difference to the planet!
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <img src="/icons/water.svg" alt="" />
              </div>
              <div className={styles.titleCard}>
                <span className={styles.secondaryColor}>54.4</span> days of drinking water saved
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <img src="/icons/wind.svg" alt="" />
              </div>
              <div className={styles.titleCard}>
                <span className={styles.secondaryColor}>7.5 miles</span> of driving emissions
                avoided
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <img src="/icons/thunder.svg" alt="" />
              </div>
              <div className={styles.titleCard}>
                <span className={styles.secondaryColor}>527 days</span> of powering an LED light
                prevented
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.productSide}>
        <div className={styles.productList}>
          <div className="flex justify-between items-center">
            <div className={styles.title}>SẢN PHẨM TƯƠNG TỰ</div>
          </div>
          <Grid container spacing={5} className="pt-6">
            {imageProduct.map((item, index) => (
              <Grid item xs={3} key={index}>
                <Product />
              </Grid>
            ))}
          </Grid>
        </div>
        <div className={styles.productList}>
          <div className="flex justify-between items-center">
            <div className={styles.title}>Các Quần Áo với Brand Levis</div>
          </div>
          <Grid container spacing={5} className="pt-6">
            {imageProduct.map((item, index) => (
              <Grid item xs={3} key={index}>
                <Product />
              </Grid>
            ))}
          </Grid>
        </div>
        <Grid container spacing={2} className="pb-24">
          <Grid item xs={6}>
            <div className="flex items-center gap-3">
              <img src="/icons/star.svg" alt="" />
              <div className={styles.title}>LÍ DO FAN YÊU THÍCH LEVIS</div>
            </div>
            <div className="mt-11 w-10/12">
              Once known as J.Crew’s little sister, Madewell is now fashion force on its own. Get
              obsessed with their figure-flattering denim, cozy pullovers, boho festival faves,
              ankle booties, and standout accessories. Affordable, on-trend, and always in style,
              Madewell finds are always up to 90% off at thredUP.
            </div>
          </Grid>
          <Grid item xs={6} className="flex items-end gap-9">
            <div className={styles.backgroundImageSquare}>
              <img src="/images/product-detail/des-image-1.png" alt="" />
            </div>
            <div className={styles.backgroundImageRectangle}>
              <img src="/images/product-detail/des-image-2.png" alt="" />
            </div>
          </Grid>
        </Grid>
        <div className={styles.productList}>
          <div className="flex justify-between items-center">
            <div className={styles.title}>TỪ CÙNG MỘT NGƯỜI BÁN</div>
          </div>
          <Grid container spacing={5} className="pt-6">
            {imageProduct.map((item, index) => (
              <Grid item xs={3} key={index}>
                <Product />
              </Grid>
            ))}
          </Grid>
        </div>
        <div className={styles.title}>NGƯỜI MUA LEVIS CŨNG MUA</div>
        <OtherEvents />
      </div>
      <UseReasonSection />
    </div>
  );
};

export default ProductDetails;
