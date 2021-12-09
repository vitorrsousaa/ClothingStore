import { GetServerSideProps } from "next"
import Head from "next/head"
import { Pagination } from "../components/ShopPage/Pagination"
import { ShopPanel } from "../components/ShopPage/ShopPanel"

interface ShopProps {
    products: Product[]
}

interface Product {
    id: string;
    name: string;
    path: string;
    alt: string;
    description: string;
    price: number;
    color: [];
    size: [];
}

export default function Shop( {products}: ShopProps ) {

    return (
        <>
            <Head>
                <title>Shop | Clothing store</title>
            </Head>
            

            <ShopPanel products={products}/>

            <Pagination />

        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {

    const products = await fetch('http://localhost:3000/api/products').then(response => response.json())

    return {
        props: {
            products: products
        }
    }
}