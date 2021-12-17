import Modal from 'react-modal'
import {GrClose} from 'react-icons/gr'

import styles from './styles.module.scss';
import { ButtonCartModal } from './ButtonCartModal';
import { useCart } from '../../../ProductsCartContext';

interface CartModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function CartModal({ isOpen, onRequestClose }: CartModalProps) {

    const { products } = useCart()

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

                <div className={styles.productsContainer}>
                    {products.map( product => {
                        return(
                            <div className={styles.productContent}>
                                <div className={styles.imageContainer}>
                                    <img src={product.path} alt={product.name} />
                                </div>
                                <div className={styles.infoContainer}>
                                    <h2>{product.name}</h2>
                                    <span>Color: {product.color}</span>
                                    <span>Size: {product.size}</span>
                                    <span>Quantity: {product.quantity}</span>
                                </div>
                                <div className={styles.priceContainer}>
                                    <h2>{product.quantity * product.price}</h2>
                                    <GrClose />
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div>
                    <ButtonCartModal />
                </div>
            </div>
        </Modal>
    )
}