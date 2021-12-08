import styles from './styles.module.scss';

interface ButtonCartProps{
    name:string;
}

export const ButtonCart = ({ name }: ButtonCartProps) => {
    return(
        <button 
            className={styles.buttonCart}
            type='button'
        >
            ADD TO CART | {name}
        </button>
    )
}