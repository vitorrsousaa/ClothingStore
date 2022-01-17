import Link from 'next/link';
import { BsSearch } from 'react-icons/bs';
import { GrShop } from 'react-icons/gr';
import { HiMenu } from 'react-icons/hi';
import { useCart } from '../../../ProductsCartContext';

import styles from './styles.module.scss';

interface HeaderMobileProps{
    openMenuModal: () => void;
    openCartModal: () => void;
}

export function HeaderMobile({ openMenuModal, openCartModal }: HeaderMobileProps) {

    const { products } = useCart()

    return (
        <nav className={styles.headermobile}>
            <HiMenu
                onClick={openMenuModal}
                className={styles.openMenuModal}
            />
            <Link href="/" prefetch>
                <a>CLOTHING STORE</a>
            </Link>
            <div>           
                <label onClick={openCartModal} >
                    <GrShop />
                    ({products.map( product => product.quantity)
                        .reduce( (acumulador, atual) => {
                        return acumulador+atual
                    },0)})
                </label>                  
                
            </div>

            
        </nav>
    )
}