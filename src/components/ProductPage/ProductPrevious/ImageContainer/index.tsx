import styles from './styles.module.scss';

interface ImageContainerProps{
    path: string;
    alt: string;
}

export function ImageContainer({path, alt}: ImageContainerProps) {
    return(
        <div className={styles.imageContainer}>
                <img src={path} alt={alt} />
            </div>
    )
}