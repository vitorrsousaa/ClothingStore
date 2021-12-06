import styles from './styles.module.scss';

export const ButtonCart = () => {
    return(
        <button 
            className={styles.buttonCart}
            type='button'
        >
            ADD TO CART | NAME OF PRODUCT
        </button>
    )
}