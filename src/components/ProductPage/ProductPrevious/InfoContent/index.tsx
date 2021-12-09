import styles from './styles.module.scss';

interface InfoContentProps{
    name: string;
    price: number;
}
export const InfoContent = ( {name, price}: InfoContentProps) => {
    return(
        <div className={styles.infoProductContent}>
            <h2>CLOTHING STORE</h2>
            <h1>{name}</h1>
            <span>{new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                }).format(price/100)}
            </span>
        </div>
    )
}