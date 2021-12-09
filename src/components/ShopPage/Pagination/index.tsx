import {IoIosArrowBack} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'

import styles from './styles.module.scss';

export const Pagination = () => {
    return(
        <div className={styles.container}>
            <IoIosArrowBack />
            <div>
                <button type='button'>1</button>
                <button type='button'>2</button>
                <button type='button'>3</button>
            </div>
            <IoIosArrowForward />
        </div>
    )
}