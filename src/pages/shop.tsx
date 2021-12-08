
import Head from "next/head"
import { Pagination } from "../components/Pagination"
import { ShopPanel } from "../components/ShopPanel"


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
