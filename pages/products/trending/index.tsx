import React from "react";
import Link from "next/link";
import { NextPage } from "next";
import LayoutProducts from "../../../components/Shared/LayoutProducts";

const TrendProducts: NextPage = () => (
  <LayoutProducts>
    <Link href="/">TrendProducts</Link>
  </LayoutProducts>
);

export default TrendProducts;
