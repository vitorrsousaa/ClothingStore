import Link from 'next/link';
import { useCart } from '../../../ProductsCartContext';
import styles from './styles.module.scss';

interface PrimaryHeaderProps {
    openCartModal: () => void;
}

export function PrimaryHeader({ openCartModal }: PrimaryHeaderProps) {
    const { products } = useCart()    

    return(
        <nav className={styles.primaryHeader}>
            <Link href="/shop" prefetch>
                <a>SHOP</a>
            </Link>
            <Link href="/about" prefetch>
                <a>ABOUT</a>
            </Link>
            <Link href="/" prefetch>
                <a>CLOTHING STORE</a>
            </Link>
            <Link href="/contact" prefetch>
                <a>CONTACT</a>
            </Link>

            <a onClick={openCartModal}>
                CART ({products.map( product => product.quantity)
                    .reduce( (acumulador, atual) => {
                        return acumulador+atual
                    })})
            </a>
             
        </nav>
    )
}