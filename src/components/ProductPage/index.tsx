import { TiSocialInstagram, TiSocialFacebook, TiSocialPinterest } from 'react-icons/ti'
import { ButtonCart } from '../ButtonCart';
import { useState } from 'react';

import styles from './styles.module.scss';

interface ProductProps {
    product: {
        id: string;
        name: string;
        path: string;
        alt: string;
        description: string;
        price: number;
    }
}

export const ProductPage = ( { product }: ProductProps) => {
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
                <img src={product.path} alt={product.alt} />
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.infoProductContent}>
                    <h2>CLOTHING STORE</h2>
                    <h1>{product.name}</h1>
                    <span>$ 150</span>
                </div>
                <div className={styles.descriptionContent}>
                    <span>
                        {product.description}
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

                <ButtonCart name={product.name}/>

            </div>
        </section>
    )
}