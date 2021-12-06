import HomeImageHero from '../../../public/images/StoryClothes.jpg'

import styles from './styles.module.scss';

export const HeroHome = () => {

    return (
        <section className={styles.container} >
            <img src={HomeImageHero.src} alt="imageclothes"/>
            <div className={styles.content} >
                <p>SEE THE NEW COLLECTION</p>
                <p>Free Delivery</p>
                <a href="/shop">Buy the products</a>
            </div>
        </section >
    )
}