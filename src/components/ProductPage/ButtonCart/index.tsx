import { useCart } from '../../../ProductsCartContext';
import styles from './styles.module.scss';

interface ButtonCartProps{
    name:string;
    id: string;
    size: string;
    color: string;
    price: number;
    quantity: number;
    path: string;
}

export const ButtonCart = ({ name, id, size, color, price, quantity, path }: ButtonCartProps) => {

    const { createProductCart } = useCart()

    async function handleProductCart(){
        if(size === '' || color === '' || quantity === 0) {
            return alert('não podemos continuar com sua compra, voce não preencheu todos os parametros')
        }
        
        await createProductCart( {
            name,
            id,
            size,
            color,
            price,
            quantity,
            path
        } )

    }    
    
    return(
        
        <button 
            className={styles.buttonCart}
            type='button'
            onClick={() => handleProductCart()}
        >
            ADD TO CART | {name}
        </button>


        
    )
}