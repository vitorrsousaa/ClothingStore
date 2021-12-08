import { useRouter } from "next/router"
import Head from "next/head"
import React, { useEffect, useState } from "react"
import { ProductPage } from "../../components/ProductPage"


import { useProductCurrent } from "../../ProductsCurrentContext"

interface ProductProps {
    id: string;
    name: string;
    path: string;
    alt: string;
    description: string;
    price: number;
}

export default function productTest() {
    const [productCurrent, setProductCurrent] = useState<ProductProps>( {} as ProductProps)
    const { idProduct } = useProductCurrent()
    const router = useRouter()

    useEffect(()=> {
        fetch(`http://localhost:3000/api/products/${idProduct}`)
            .then(response => response.json())
            .then(responseParsed => setProductCurrent(responseParsed))
    }, [])

    return (
        <>
            <Head>
                <title>{productCurrent.alt} | Clothing store</title>
            </Head>

            <ProductPage product={productCurrent}/>
            

        </>
    )
}

