
import { useState } from 'react'
import { ButtonSelected } from '../ButtonSelected'
import styles from './styles.module.scss'

interface SizeContentProps {
    sizes: string[];
    sizeSelected: string;
    setSizeSelected: (param: string) => void;
}

export const SizeContent = ( { sizes, sizeSelected, setSizeSelected }: SizeContentProps) => {

    const sizesCurrent = sizes

    return(
         <div className={styles.sizeContent}>
            <span>Size:</span>
            <div className={styles.sizeContentButton}>
                { 
                    sizesCurrent.map((sizeElement) => (
                        <ButtonSelected 
                            selected={sizeSelected} 
                            elementCurrent={sizeElement}
                        >
                            <button
                                key={sizeElement}
                                onClick={() => setSizeSelected(sizeElement) }
                            >
                                {sizeElement}
                            </button>
                        </ButtonSelected>
                    ))
                }
            </div>  
        </div>
    )
}