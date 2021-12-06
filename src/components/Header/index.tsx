import Link from 'next/link'
import { useState } from 'react';
import Modal from 'react-modal';

import { MenuModal } from '../MenuModal';
import { HiMenu } from 'react-icons/hi'
import { BsSearch } from 'react-icons/bs'
import { GrShop } from 'react-icons/gr'

import styles from './styles.module.scss';

Modal.setAppElement('#__next')

export const Header = () => {

    const [isMenuModalOpen, setIsMenuModalOpen] = useState(false)

    function handleOpenMenuModal(){
        setIsMenuModalOpen(true)
    }
    function handleCloseMenuModal(){
        setIsMenuModalOpen(false)
    }

    return(
        <header className={styles.container}>
            <div className={styles.secondaryHeader}> 
                <p>25% OFF ALL PRODUCTS - UNTIL JANUARY</p>
            </div>
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
                <Link href="/search">
                    <a>SEARCH</a>
                </Link>
                <Link href="/cart">
                    <a>CART</a>
                </Link>
            </nav>

            <nav className={styles.headermobile}>
                <HiMenu
                    onClick={handleOpenMenuModal}
                    className={styles.openMenuModal}
                />
                <Link href="/">
                    <a>CLOTHING STORE</a>
                </Link>
                <div>           
                    <Link href="/shop">
                        <GrShop />
                    </Link>
                    <Link href="/search">
                        <BsSearch />                    
                    </Link>
                </div>

                <MenuModal 
                    isOpen={isMenuModalOpen}
                    onRequestClose={handleCloseMenuModal}
                />
            </nav>

        </header>
    )
}