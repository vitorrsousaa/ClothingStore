import styles from './styles.module.scss';

export function ButtonCartModal() {
    
    return(
            <button 
                className={styles.buttonCart}
                type='button'
            >
                ADD TO CART | $1547
            </button>
    )
}