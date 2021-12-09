import { useRouter } from "next/router"
import Head from "next/head"
import React, { useEffect, useState } from "react"

import { ProductPrevious } from "../../components/ProductPage/ProductPrevious"
import { GetServerSideProps } from "next"

interface ProductPageProps {
    product: {
        id: string;
        name: string;
        path: string;
        alt: string;
        description: string;
        price: number;
        color: [];
        size: [];
    }
}

export default function productTest( {product}: ProductPageProps ) {
    

    return (
        <>
            <Head>
                <title>{product.alt} | Clothing store</title>
            </Head>

            <ProductPrevious product={product} />
            
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (path) => {

    const productCurrent = await fetch(`http://localhost:3000/api/products/${path.query.slug}`)
        .then(response => response.json())

    return {
        props: {
            product: productCurrent
        }
    }
}