import Link from 'next/link'
import { useState } from 'react';
import Modal from 'react-modal';

import { MenuModal } from './MenuModal';
import { HiMenu } from 'react-icons/hi'
import { BsSearch } from 'react-icons/bs'
import { GrShop } from 'react-icons/gr'

import styles from './styles.module.scss';
import { SearchModal } from './SearchModal';

Modal.setAppElement('#__next')

export const Header = () => {

    const [isMenuModalOpen, setIsMenuModalOpen] = useState(false)
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)

    function handleOpenSearchModal() {
        setIsSearchModalOpen(true)
    }

    function handleCloseSearchModal() {
        setIsSearchModalOpen(false)
    }

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

                <a onClick={handleOpenSearchModal}>SEARCH</a>
    
                <Link href="/cart">
                    <a>CART (0)</a>
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
                    
                    <BsSearch onClick={handleOpenSearchModal}/>                    
                    
                </div>

                <MenuModal 
                    isOpen={isMenuModalOpen}
                    onRequestClose={handleCloseMenuModal}
                    searchModalOpen={handleOpenSearchModal}
                />
                <SearchModal 
                    isOpen={isSearchModalOpen}
                    onRequestClose={handleCloseSearchModal}
                />
            </nav>

        </header>
    )
}