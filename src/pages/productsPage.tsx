import Head from "next/head"

import { ProductPage } from "../components/ProductPage"

export default function ProductsPage() {
    return (
        <>
            <Head>
                <title>ProductPage | Clothing store</title>
            </Head>

            <ProductPage />

        </>
    )
}