import Link from 'next/link'
import styles from './styles.module.scss';

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

export const ShopPanel = ( { products }: ShopProps ) => {

    return (
        <div className={styles.productListContainer}>
            {
                products.map( ( product ) => {
                    return(
                        <div className={styles.productListContent} key={product.id} id={product.id}>
                            <Link href={`/products/${product.alt}`} passHref prefetch>
                                <img src={product.path} alt={product.alt}  loading='lazy' />
                            </Link>
                            <div className={styles.productInfoContainer} >
                                <h2>{product.name}</h2>
                                <span>{new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                    }).format(product.price/100)}
                                </span>
                            </div>                           
                        </div>
                    )
                })
            }
        </div>
        
    )
}