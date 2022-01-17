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

    const total = products.map(product => product.quantity * product.price)
        .reduce((acc, atual) => {
            return acc + atual
    }, 0)

    const newTotal = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(total/100)

    function handleRemoveProduct(indexProduct: number) {
        console.log(products)
        products.splice(indexProduct, 1)
        console.log(products)
    }

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
                    {products.map( (product , index) => {
                        return(
                            <div className={styles.productContent} key={product.name+product.quantity}>
                                <div className={styles.imageContainer}>
                                    <img src={product.path} alt={product.name} />
                                </div>
                                <div className={styles.infoContainer}>
                                    <h2>{product.name}</h2>
                                    <span>{product.size} / {product.color}</span>
                                    <span>{new Intl.NumberFormat('en-US', {
                                            style: 'currency',
                                            currency: 'USD',
                                            }).format((product.quantity * product.price)/100)}
                                    </span>
                                    <span>{product.quantity} Units</span>
                                </div>
                                <GrClose onClick={()=> handleRemoveProduct(index)}/>
                            </div>
                        )
                    })}
                </div>

                <div>
                    <ButtonCartModal total = {newTotal} />
                </div>
            </div>
        </Modal>
    )
}