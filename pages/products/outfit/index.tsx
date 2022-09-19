import React from "react";
import Link from "next/link";
import { NextPage } from "next";
import LayoutProducts from "../../../components/Shared/LayoutProducts";

const Outfit: NextPage = () => (
  <LayoutProducts>
    <Link href="/">Outfit</Link>
  </LayoutProducts>
);

export default Outfit;
