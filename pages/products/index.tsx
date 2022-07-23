/* eslint-disable react/react-in-jsx-scope */
import { NextPage } from "next";
import Link from "next/link";
import Select from "react-select";
import Grid from "@mui/material/Grid";
import LayoutWrapper from "../../components/Shared/LayoutWrapper";
import Breadcrumb from "../../components/Shared/Breadcrumb";
import styles from "../../styles/Product.module.scss";

const Product: NextPage = () => (
  <LayoutWrapper>
    <div className={styles.productWrapper}>
      <div className="pt-8">
        <Breadcrumb>
          <Link href="/products" passHref>
            <span>Mua /</span>
          </Link>
        </Breadcrumb>
        <span className={styles.titleSidebar}>NỮ</span>
        <div className={styles.divider}>{" "}</div>
        <div className={`cursor-pointer ${styles.categoryProductSelected}`}>Hàng mới về</div>
        <div className={`cursor-pointer ${styles.categoryProductSelected}`}>Sale</div>
        <div className={`cursor-pointer ${styles.categoryProductSelected}`}>Áo khoác</div>
        <div className={`cursor-pointer ${styles.categoryProduct}`}>Áo Coast</div>
        <div className={`cursor-pointer ${styles.categoryProduct}`}>Áo blouse</div>
        <div className={`cursor-pointer ${styles.categoryProduct}`}>Áo jacket</div>
      </div>
      <div>
        <div className={styles.banner}>
          <img src="/images/products/banner-product.png" alt="" />
          <div className="flex justify-center items-center">
            <div>
              <div className={styles.titleBanner}>Áo khoác họa tiết</div>
              <div className="text-xl w-80 py-9">Áo khoác đa dụng, phù hợp với mọi loại thời tiết.</div>
              <div className="text-xl w-80">Áo khoác đa dụng, phù hợp với mọi loại thời tiết.</div>
              <div className="flex items-baseline justify-between">
                <div className="text-2xl text-red-600 pt-6">290,000 VND </div>
                <div className="line-through">690,000 VND</div>
              </div>
              <div className="text-red-600 pt-3.5 pb-6">Sale đến 25/4</div>
              <button type="submit" className={styles.btnBuy}>MUA NGAY</button>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <span className="text-xl font-bold">Thông báo</span>
          <div className={styles.notify}>
            <div className="flex">
              <img src="/images/products/notify-1.svg" alt="" />
              <div className="pl-6 space-y-10">
                <div className="text-base font-extrabold">Passdy Update</div>
                <div className="w-36">Tin tức về thời bền vững luôn được cập nhật mới nhất</div>
              </div>
            </div>
            <div className="flex">
              <img src="/images/products/notify-1.svg" alt="" />
              <div className="pl-6 space-y-10">
                <div className="text-base font-extrabold">Passdy Update</div>
                <div className="w-36">Tin tức về thời bền vững luôn được cập nhật mới nhất</div>
              </div>
            </div>
            <div className="flex">
              <img src="/images/products/notify-1.svg" alt="" />
              <div className="pl-6 space-y-10">
                <div className="text-base font-extrabold">Passdy Update</div>
                <div className="w-36">Tin tức về thời bền vững luôn được cập nhật mới nhất</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <span className="text-xl font-bold">Xem gần đây</span>
          <div className="flex items-center">
            <span className="text-sm pr-1.5">Thời gian</span>
            <Select
              placeholder="Trong tháng này"
              value={1}
              name="1"
            />
          </div>
          <Grid container spacing={2} className="pt-10">
            <Grid item md={3}>
              <img src="/images/products/product-1.svg" alt="" />
              <div className="flex">
                <div>s</div>
                <div>s</div>
              </div>
            </Grid>
            <Grid item md={3}>s</Grid>
            <Grid item md={3}>s</Grid>
            <Grid item md={3}>s</Grid>
          </Grid>
        </div>
      </div>
    </div>
  </LayoutWrapper>
);

export default Product;
