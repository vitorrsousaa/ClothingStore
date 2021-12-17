import Modal from 'react-modal'

import {GrClose} from 'react-icons/gr'

import styles from './styles.module.scss'
import Link from 'next/link'

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
                <Link href="/about" prefetch >
                    <a  
                        onClick={onRequestClose}
                    >
                        ABOUT
                    </a>
                </Link>
                <Link href="/shop" prefetch >
                    <a                         
                        onClick={onRequestClose}
                    >
                        SHOP
                    </a>
                </Link>
                <Link href="/contact" prefetch >
                    <a                         
                        onClick={onRequestClose}
                    >
                        CONTACT
                    </a>
                </Link>
                
            </div>
        </Modal>
    )
}