import Link from 'next/link';
import { BsSearch } from 'react-icons/bs';
import { GrShop } from 'react-icons/gr';
import { HiMenu } from 'react-icons/hi';
import { useCart } from '../../../ProductsCartContext';

import styles from './styles.module.scss';

interface HeaderMobileProps{
    openMenuModal: () => void;
    openSearchModal: () => void;
    openCartModal: () => void;
}

export function HeaderMobile({ openMenuModal, openSearchModal, openCartModal }: HeaderMobileProps) {

    const { products } = useCart()

    return (
        <nav className={styles.headermobile}>
            <HiMenu
                onClick={openMenuModal}
                className={styles.openMenuModal}
            />
            <Link href="/">
                <a>CLOTHING STORE</a>
            </Link>
            <div>           
                <label >
                    <GrShop onClick={openCartModal}/>
                    ({products.length})
                </label>
                
                
                <BsSearch onClick={openSearchModal}/>                    
                
            </div>

            
        </nav>
    )
}