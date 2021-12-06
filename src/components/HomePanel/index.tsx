
import image01 from '../../../public/images/ManLooks (2).jpg'
import image04 from '../../../public/images/ManLooks (1).jpg'
import image02 from '../../../public/images/ManLooks (3).jpg'
import image03 from '../../../public/images/WomanLooks (1).jpg'

import styles from './styles.module.scss';

export const HomePanel = () => {
    return(
        <section className={styles.container}>

            <header className={styles.header}>
                <h1>FEATURED PRODUCTS</h1>
            </header>

            <div className={styles.productListContainer}>
                <div className={styles.productListContent}>
                    <img src={image01.src} alt="" />
                    <div className={styles.productInfoContainer}>
                        <h2>THE YELLOW JACKET</h2>
                        <p>$ 100</p>
                    </div>
                </div>

                <div className={styles.productListContent}>
                    <img src={image03.src} alt="" />
                    <div className={styles.productInfoContainer}>
                        <h2>GIRL POWER SHIRT</h2>
                        <p>$ 100</p>
                    </div>
                </div >

                <div className={styles.productListContent}>
                    <img src={image02.src} alt="" />
                    <div className={styles.productInfoContainer}>
                        <h2>AMAZING BLACK JEANS </h2>
                        <p>$ 100</p>
                    </div>
                </div >

                <div className={styles.productListContent}>
                    <img src={image04.src} alt="" />
                    <div className={styles.productInfoContainer}>
                        <h2>SWEATER</h2>
                        <p>$ 100</p>
                    </div>
                </div>
            </div>

        </section>
    )
}