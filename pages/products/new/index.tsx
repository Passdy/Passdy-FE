import React from "react";
import Link from "next/link";
import { NextPage } from "next";
import LayoutProducts from "../../../components/Shared/LayoutProducts";

const NewProducts: NextPage = () => (
  <LayoutProducts>
    <Link href="/">NewProducts</Link>
  </LayoutProducts>
);

export default NewProducts;
