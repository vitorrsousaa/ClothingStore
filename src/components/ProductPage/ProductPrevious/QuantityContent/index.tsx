import { useState } from 'react';
import styles from './styles.module.scss';

interface QuantityContentProps {
    setQuantity: (param:number) => void;
    quantity: number;
}

export function QuantityContent({setQuantity, quantity}: QuantityContentProps) {

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
    )
}