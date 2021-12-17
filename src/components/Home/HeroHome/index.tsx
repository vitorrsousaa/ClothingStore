import Link from 'next/link';
import HomeImageHero from '../../../../public/images/StoryClothes.jpg'

import styles from './styles.module.scss';

export const HeroHome = () => {

    return (
        <section className={styles.container} >
            <img src={HomeImageHero.src} alt="imageclothes"/>
            <div className={styles.content} >
                <p>SEE THE NEW COLLECTION</p>
                <p>Free Delivery</p>
                <Link href="/shop" prefetch>
                    <a>Buy the products</a>
                </Link>
            </div>
        </section >
    )
}