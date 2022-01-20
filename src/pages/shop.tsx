import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Pagination } from "../components/ShopPage/Pagination";
import { ShopPanel } from "../components/ShopPage/ShopPanel";
import { useProducts } from "../ProductsContext";

export default function Shop() {
  return (
    <>
      <Head>
        <title>Shop | Clothing store</title>
      </Head>

      <ShopPanel />

      <Pagination />
    </>
  );
}
