import styles from './styles.module.scss';

interface DescriptionContentProps{
    description: string;
}

export function DescriptionContent({description}:DescriptionContentProps) {

    return(
        <div className={styles.descriptionContent}>
            <span>
                {description}
            </span>
        </div>
    ) 
}



