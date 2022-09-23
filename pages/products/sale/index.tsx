/* eslint-disable react/no-array-index-key */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { NextPage } from "next";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import cls from "classnames";
import ReactPaginate from "react-paginate";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import commonStyles from "../../../styles/common.module.scss";
import styles from "./Sale.module.scss";
import LayoutProducts from "../../../components/Shared/LayoutProducts";
import Product from "../../../components/Shared/Product";
import Sales from "../../../components/Shared/Sale";

const SaleProducts: NextPage = () => {
  const [age, setAge] = useState("");
  const imageProduct = Array.from(Array(4));

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <LayoutProducts>
      <div className="md:container md:pr-44">
        <div className={styles.mainSale}>
          <div className={styles.titleSale}>ÁO KHOÁC</div>
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
              <div className={styles.titleProduct}>ÁO COAT</div>
              <div className={styles.totalProduct}>15 sản phẩm</div>
            </div>
            <Grid container spacing={5} className="pt-6">
              {imageProduct.map((item, index) => (
                <Grid item xs={3} key={index}>
                  <Product />
                </Grid>
              ))}
            </Grid>
            <div className={cls(commonStyles.paginateLine, "pt-20")}>
              <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={() => console.log("1")}
                pageRangeDisplayed={5}
                pageCount={5}
                previousLabel="<"
                activeClassName={commonStyles.selected}
                renderOnZeroPageCount={undefined}
              />
            </div>
          </div>
          <div className="pt-10">
            <Sales />
          </div>
        </div>
      </div>
    </LayoutProducts>
  );
};

export default SaleProducts;
