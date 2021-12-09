
import Head from "next/head"
import { Pagination } from "../components/ShopPage/Pagination"
import { ShopPanel } from "../components/ShopPage/ShopPanel"


export default function Shop() {

    return (
        <>
            <Head>
                <title>Shop | Clothing store</title>
            </Head>
            

            <ShopPanel />

            <Pagination />

        </>
    )
}
