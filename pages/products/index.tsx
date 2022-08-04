import React from "react";
import { NextPage } from "next";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import LayoutProducts from "../../components/Shared/LayoutProducts";
import styles from "../../styles/Product.module.scss";
import Breadcrumb from "../../components/Shared/Breadcrumb";
import LikeProduct from "../../components/Shared/LikeProduct";

const Products: NextPage = () => (
  <LayoutProducts>
    <div className={styles.mainProducts}>
      <Grid container spacing={1} className={`flex  ${styles.backgroundMain}`}>
        <Grid item xs={7}>
          <div className={styles.sale}>Sale tới 40%</div>
          <div className="flex">
            <img src="/icons/product/arrow.svg" alt="" />
            <div className="text-xl font-semibold pl-5">
              Cho tất cả các khách hàng đầu tiên của Passdy + Free ship!!
            </div>
          </div>
        </Grid>
        <Grid item xs={5} className="flex items-center justify-center">
          <Button
            size="large"
            variant="contained"
            className={`text-base font-semibold ${styles.buyNowButton}`}
          >
            SẮM NGAY
          </Button>
        </Grid>
      </Grid>
      <Breadcrumb>
        <Link href="/sell-and-donate" passHref>
          Bán/
        </Link>
        <Link href="/sell-and-donate" passHref>
          <span> Nữ</span>
        </Link>
      </Breadcrumb>
      <div className={styles.titleTop}>Diện văn minh mùa hè này!</div>
      <div className={` mb-28 ${styles.banner}`}>
        <Grid container spacing={1} className="relative">
          <Grid item xs={5} className="text-center">
            <div className={styles.titleBanner}>Back-to-school</div>
            <div className="text-base pt-3 pb-5">
              Khám phá những outfit nổi bât nhất mùa hè này!
            </div>
            <div>
              <Button
                size="large"
                variant="outlined"
                className={`text-base font-semibold ${styles.btnShop}`}
              >
                SHOP NGAY
              </Button>
            </div>
          </Grid>
          <Grid item xs={7}>
            {" "}
          </Grid>
          <div className={`absolute ${styles.imageBanner}`}>
            <img src="/images/products/banner-1.png" alt="" />
          </div>
        </Grid>
      </div>
      <div className="md:container md:pr-44">
        <Grid container spacing={2}>
          <Grid item xs={4} className="flex">
            <img src="/images/products/banner-2.png" alt="" />
            <div className="pt-6 pl-4 pr-10">
              <div className="font-bold pb-4">Passdy Update</div>
              <div className="text-sm ">Tin tức về thời bền vững luôn được cập nhật mới nhất</div>
            </div>
          </Grid>
          <Grid item xs={4} className="flex">
            <img src="/images/products/banner-2.png" alt="" />
            <div className="pt-6 pl-4 pr-10">
              <div className="font-bold pb-4">Passdy Update</div>
              <div className="text-sm ">Tin tức về thời bền vững luôn được cập nhật mới nhất</div>
            </div>
          </Grid>
          <Grid item xs={4} className="flex">
            <img src="/images/products/banner-2.png" alt="" />
            <div className="pt-6 pl-4 pr-10">
              <div className="font-bold pb-4">Passdy Update</div>
              <div className="text-sm ">Tin tức về thời bền vững luôn được cập nhật mới nhất</div>
            </div>
          </Grid>
        </Grid>
        <div className={styles.seenProduct}>
          <div className={styles.titleSeen}>Xem gần đây</div>
          <div className="flex items-center pt-10">
            <div className="flex items-center">
              <div className={`text-sm ${styles.colorBg5}`}>Thời gian</div>
              <FormControl className="m-1 w-40 ml-3" size="small">
                <InputLabel id="demo-select-small">Trong tháng này</InputLabel>
                <Select labelId="demo-select-small" id="demo-select-small" label="Trong tháng này">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={`text-sm ml-auto ${styles.colorBg5}`}>120 sản phẩm</div>
          </div>
          <Grid container spacing={2} className="pt-12">
            <Grid item xs={3}>
              <div className="relative">
                <div className={`absolute flex items-center ${styles.heartIcon}`}>
                  <span className={`mr-1 font-bold ${styles.colorPrimary}`}>25</span>
                  <LikeProduct />
                </div>
                <img src="/images/example-Tshirt.png" alt="s" />
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
            </Grid>
            <Grid item xs={3}>
              <div className="relative">
                <div className={`absolute flex items-center ${styles.heartIcon}`}>
                  <span className={`mr-1 font-bold ${styles.colorPrimary}`}>25</span>
                  <LikeProduct />
                </div>
                <img src="/images/example-Tshirt.png" alt="s" />
              </div>
              <div className="flex mt-1">
                <div>
                  <div className="font-medium text-sm">Uniqlo</div>
                  <div className="text-slate-600 text-sm">Áo blouse</div>
                  <div className="flex">
                    <div className={`text-sm ${styles.pricePrimary}`}>250.000 VND</div>
                    <div className={styles.salePrice}> 250.000 VND</div>
                  </div>
                </div>
                <div className={`ml-auto text-xs ml-auto ${styles.colorBg5}`}>Size S</div>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="relative">
                <div className={`absolute flex items-center ${styles.heartIcon}`}>
                  <span className={`mr-1 font-bold ${styles.colorPrimary}`}>25</span>
                  <LikeProduct />
                </div>
                <img src="/images/example-Tshirt.png" alt="s" />
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
            </Grid>
            <Grid item xs={3}>
              <div className="relative">
                <div className={`absolute flex items-center ${styles.heartIcon}`}>
                  <span className={`mr-1 font-bold ${styles.colorPrimary}`}>25</span>
                  <LikeProduct />
                </div>
                <img src="/images/example-Tshirt.png" alt="s" />
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
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  </LayoutProducts>
);

export default Products;
