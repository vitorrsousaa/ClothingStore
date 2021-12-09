import { ButtonSelected } from '../ButtonSelected'
import styles from './styles.module.scss'

interface ColorContentProps {
    colors: string[]
    colorSelected: string;
    setColorSelected: (param: string) => void;
}

export function ColorContent( { colors, colorSelected, setColorSelected }: ColorContentProps ){

    const colorsCurrent = colors

    return(
        <div className={styles.colorContent}>
            <span>Color:</span>
            <div className={styles.colorContentButton}>
                { 
                    colorsCurrent.map((colorElement) => (
                        <ButtonSelected
                            selected={colorSelected}
                            elementCurrent={colorElement}
                        >
                            <button 
                                key={colorElement.toString()}
                                onClick={()=> setColorSelected(colorElement)}
                            >
                                {colorElement}
                            </button>
                        </ButtonSelected>
                    ))
                }
            </div>
        </div>
    )
}