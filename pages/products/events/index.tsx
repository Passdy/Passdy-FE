/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styles from "./Event.module.scss";
import LayoutProducts from "../../../components/Shared/LayoutProducts";
import Breadcrumb from "../../../components/Shared/Breadcrumb";
import Product from "../../../components/Shared/Product";
import OtherEvents from "../../../components/Shared/OtherEvents";
import Sales from "../../../components/Shared/Sale";

const BuyEvents: NextPage = () => {
  const [age, setAge] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <LayoutProducts>
      <div className="md:container md:pr-44">
        <div className={styles.mainEvents}>
          <div className={styles.banner}>
            <div className={styles.titleBanner}>Office wear</div>
          </div>
          <div className={styles.bread}>
            <Breadcrumb>
              <Link href="/sell-and-donate" passHref>
                Bán/
              </Link>
              <Link href="/sell-and-donate" passHref>
                <span> Nữ</span>
              </Link>
            </Breadcrumb>
          </div>
          <div className={styles.selects}>
            <div className="flex">
              <div className={styles.inputSelect}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel variant="standard" id="demo-simple-select-label">
                    Size
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className={styles.inputSelect}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="demo-simple-select-label">Màu</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className={styles.inputSelect}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="demo-simple-select-label">Giá</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className={styles.inputSelect}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="demo-simple-select-label">Phân loại</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className={styles.inputSelect}>
              <FormControl variant="standard" fullWidth>
                <InputLabel id="demo-simple-select-label">Sắp xếp</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="mt-12">
            <div className="flex justify-between items-center">
              <div className={styles.titleProduct}>Áo</div>
              <div className={styles.totalProduct}>15 sản phẩm</div>
            </div>
            <Grid container spacing={5} className="pt-6">
              <Grid item xs={3}>
                <Product />
              </Grid>
              <Grid item xs={3}>
                <Product />
              </Grid>
              <Grid item xs={3}>
                <Product />
              </Grid>
              <Grid item xs={3}>
                <Product />
              </Grid>
            </Grid>
          </div>
          <div className="mt-12">
            <div className="flex justify-between items-center">
              <div className={styles.titleProduct}>Quần</div>
              <div className={styles.totalProduct}>15 sản phẩm</div>
            </div>
            <Grid container spacing={5} className="pt-6">
              <Grid item xs={3}>
                <Product />
              </Grid>
              <Grid item xs={3}>
                <Product />
              </Grid>
              <Grid item xs={3}>
                <Product />
              </Grid>
              <Grid item xs={3}>
                <Product />
              </Grid>
            </Grid>
          </div>
          <div className="mt-12">
            <div className="flex justify-between items-center">
              <div className={styles.titleProduct}>CHÂN VÁY</div>
              <div className={styles.totalProduct}>15 sản phẩm</div>
            </div>
            <Grid container spacing={5} className="pt-6">
              <Grid item xs={3}>
                <Product />
              </Grid>
              <Grid item xs={3}>
                <Product />
              </Grid>
              <Grid item xs={3}>
                <Product />
              </Grid>
              <Grid item xs={3}>
                <Product />
              </Grid>
            </Grid>
          </div>
          <OtherEvents />
          <div className="pt-10">
            <Sales />
          </div>
        </div>
      </div>
    </LayoutProducts>
  );
};

export default BuyEvents;
