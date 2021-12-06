import image01 from '../../../public/images/SideImage(1).jpg';
import image02 from '../../../public/images/SideImage(2).jpg';

import styles from './styles.module.scss'

export const HeroAbout = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div>
                    <h2>Created by Vitor Sousa!</h2>
                    <p>Project made to get a job</p>
                </div>
            </div>

            <div className={styles.content}>
                <img src={image01.src} alt="image01HeroAbout" />
            </div>

            <div className={styles.content}>
                <img src={image02.src} alt="image02HeroAbout" />
            </div>

        </section>
    )
}