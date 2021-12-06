import { TiSocialInstagram, TiSocialFacebook, TiSocialPinterest } from 'react-icons/ti'
import { ButtonCart } from '../ButtonCart';
import { useState } from 'react';

import image01 from '../../../public/images/ManLooks (1).jpg'
import styles from './styles.module.scss';

export const ProductPage = () => {
    const [quantity, setQuantity] = useState(0)

    function handleSubQuantity() {
        if (quantity == 0){
            return true
        } else {
            setQuantity(quantity-1)
        }
    }

    function handleAddQuantity() {
        setQuantity(quantity+1)
    }


    return(
        <section className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={image01.src} alt="" />
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.infoProductContent}>
                    <h2>CLOTHING STORE</h2>
                    <h1>NAME OF THE PRODUCT</h1>
                    <span>$ 150</span>
                </div>
                <div className={styles.descriptionContent}>
                    <span>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </span>
                    
                </div>
                <div className={styles.socialContent}>
                    <span>SHARE: </span>
                    <TiSocialInstagram />
                    <TiSocialFacebook />
                    <TiSocialPinterest />
                </div>
                <div className={styles.sizeContent}>
                    <span>Size:</span>
                    <div className={styles.sizeContentButton}>
                        <button>M</button>
                        <button>L</button>                      
                        <button>G</button>
                    </div>
                </div>
                <div className={styles.colorContent}>
                    <span>Color:</span>
                    <div className={styles.colorContentButton}>
                        <button>White</button>
                        <button>Brown</button>
                        <button>Gray</button>
                    </div>
                </div>
                <div className={styles.quantityContent}>
                    <span>Quantity:</span>
                    <div className={styles.quantityContentButton}>
                        <button
                            type='button'
                            onClick={() => handleSubQuantity()}
                        >
                            -
                        </button>
                        <span>{quantity}</span>
                        <button
                            type='button'
                            onClick={() => handleAddQuantity()}
                        >
                            +
                        </button>

                    </div>
                </div>

                <ButtonCart />

            </div>
        </section>
    )
}