import { useState } from 'react';
import Modal from 'react-modal';

import { SecondaryHeader } from './SecondaryHeader';
import { PrimaryHeader } from './PrimaryHeader';
import { HeaderMobile } from './HeaderMobile';
import { MenuModal } from './MenuModal';
import { SearchModal } from './SearchModal';
import { CartModal } from './CartModal';

import styles from './styles.module.scss';

Modal.setAppElement('#__next')

export const Header = () => {

    const [isMenuModalOpen, setIsMenuModalOpen] = useState(false)
    const [isCartModalOpen, setIsCartModalOpen] = useState(false)
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

    function handleOpenCartModal(){
        setIsCartModalOpen(true)
    }
    function handleCloseCartModal(){
        setIsCartModalOpen(false)
    }

    return(
        <header className={styles.container}>

            <SecondaryHeader />

            <PrimaryHeader 
                openSearchModal={handleOpenSearchModal}
                openCartModal = {handleOpenCartModal}
                
            />

            <HeaderMobile 
                openMenuModal={handleOpenMenuModal}
                openSearchModal={handleOpenSearchModal}
                openCartModal={handleOpenCartModal}
            />

            <MenuModal 
                isOpen={isMenuModalOpen}
                onRequestClose={handleCloseMenuModal}
                searchModalOpen={handleOpenSearchModal}
            />
            <SearchModal 
                isOpen={isSearchModalOpen}
                onRequestClose={handleCloseSearchModal}
            />

            <CartModal 
                isOpen={isCartModalOpen}
                onRequestClose={handleCloseCartModal}    
            />

        </header>
    )
}