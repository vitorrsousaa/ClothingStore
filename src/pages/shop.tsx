import { GetServerSideProps } from "next"
import Head from "next/head"
import { useEffect, useState } from "react"
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

export default function Shop(  ) {
    const [products, setProducts] = useState([] as Product[])

    async function getProducts() {
        await fetch('http://localhost:3000/api/products').then(response => response.json()).then(responseParsed => setProducts(responseParsed))
    }

    useEffect(() => {
        getProducts()
    }, [])

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

