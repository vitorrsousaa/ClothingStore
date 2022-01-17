import styles from './styles.module.scss';

interface ButtonCartModalProps {
    total: string;
}

export function ButtonCartModal({ total }: ButtonCartModalProps ) {
    
    return(
            <button 
                className={styles.buttonCart}
                type='button'
            >
                CHECKOUT | {total}
            </button>
    )
}