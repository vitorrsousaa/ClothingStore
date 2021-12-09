import { useEffect, useState } from 'react';
import { useProductCurrent } from '../../../ProductsCurrentContext';
import Link from 'next/link'

import styles from './styles.module.scss';


interface Product {
    id: string;
    name: string;
    path: string;
    alt: string;
    description: string;
    price: number;
}

export const ShopPanel = () => {
    const { setIdProduct, idProduct } = useProductCurrent()
    const [products, setProducts] = useState<Product[]>([])
    
    useEffect(()=>{
        fetch('http://localhost:3000/api/products').then(response => response.json()).then(responseParsed => setProducts(responseParsed))
    },[])

    function handlePageProduct(props){
        const productId = props.target.parentElement.id
        console.log('id:', productId)
        setIdProduct(productId)
        console.log('context:', idProduct)

        //window.location.replace(`/products/${props.target.alt}`)
    }

    return (
        <div className={styles.productListContainer}>
            {
                products.map( ( product ) => {
                    return(
                        <div className={styles.productListContent} key={product.id} id={product.id}>
                            <Link href={`/products/${product.alt}`} passHref>
                                <img src={product.path} alt={product.alt}  loading='lazy' onClick={ (params) => handlePageProduct(params) } />
                            </Link>
                            <div className={styles.productInfoContainer} >
                                <h2>{product.name}</h2>
                                <span>{new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                }).format(product.price/100)}</span>
                            </div>                           
                        </div>
                    )
                })
            }
        </div>
        
    )
}