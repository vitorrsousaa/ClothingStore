import Modal from 'react-modal'

import {GrClose} from 'react-icons/gr'

import styles from './styles.module.scss'

interface MenuModalProps{
    isOpen: boolean;
    onRequestClose: () => void
    searchModalOpen: () => void
}

export const MenuModal = ({isOpen, onRequestClose, searchModalOpen}: MenuModalProps) => {

    function handleModalsClose() {
        onRequestClose()
        searchModalOpen()
    }
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName={styles.overlay}
            className={styles.modal} 
        >
            <GrClose 
                onClick={onRequestClose}
            />
            <div className={styles.title}>
                <h1>CLOTHING STORE</h1>
                <span>Create by Vitor Sousa!</span>
            </div>

            <div className={styles.content}>
                <a 
                    href="/about" 
                    onClick={onRequestClose}
                >
                    ABOUT
                </a>
                <a 
                    href="/shop" 
                    onClick={onRequestClose}
                >
                    SHOP
                </a>
                <a 
                    
                    onClick={handleModalsClose}
                >
                    SEARCH
                </a>
            </div>
        </Modal>
    )
}