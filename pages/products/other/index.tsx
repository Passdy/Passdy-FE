import React from "react";
import Link from "next/link";
import { NextPage } from "next";
import LayoutProducts from "../../../components/Shared/LayoutProducts";

const OrtherProducts: NextPage = () => (
  <LayoutProducts>
    <Link href="/">OrtherProducts</Link>
  </LayoutProducts>
);

export default OrtherProducts;
