import Modal from 'react-modal'

import {GrClose} from 'react-icons/gr'

import styles from './styles.module.scss'

interface MenuModalProps{
    isOpen: boolean;
    onRequestClose: () => void
}

export const MenuModal = ({isOpen, onRequestClose}: MenuModalProps) => {

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
                    href="/search" 
                    onClick={onRequestClose}
                >
                    SEARCH
                </a>
                <a 
                    href="/cart" 
                    onClick={onRequestClose}
                >
                    CART
                </a>
            </div>
        </Modal>
    )
}