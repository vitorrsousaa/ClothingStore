import Link from 'next/link';
import { useCart } from '../../../ProductsCartContext';
import styles from './styles.module.scss';

interface PrimaryHeaderProps {
    openSearchModal: () => void;
    openCartModal: () => void;
}

export function PrimaryHeader({ openSearchModal, openCartModal }: PrimaryHeaderProps) {
    const { products } = useCart()
    

    return(
        <nav className={styles.primaryHeader}>
            <Link href="/shop">
                <a>SHOP</a>
            </Link>
            <Link href="/about">
                <a>ABOUT</a>
            </Link>
            <Link href="/">
                <a>CLOTHING STORE</a>
            </Link>

            <a onClick={openSearchModal}>
                SEARCH
            </a>
    
            
            <a onClick={openCartModal}>
                CART ({products.length})
            </a>
             
        </nav>
    )
}