import Modal from 'react-modal'
import {GrClose} from 'react-icons/gr'

import styles from './styles.module.scss';
import { ButtonCartModal } from './ButtonCartModal';

interface CartModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function CartModal({ isOpen, onRequestClose }: CartModalProps) {

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName={styles.overlay}
            className={styles.modal}
        >
            <div className={styles.containerModal}>
                <div className={styles.titleContainer}>
                    <h1>CART</h1>
                    <GrClose onClick={onRequestClose} />
                </div>

                <div>
                    <h1>teste</h1>
                </div>

                <div>
                    <ButtonCartModal />
                </div>
            </div>
        </Modal>
    )
}