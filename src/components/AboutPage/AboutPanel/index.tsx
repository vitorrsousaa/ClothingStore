import logo from '../../../../public/images/logo.png';

import styles from './styles.module.scss';

export const AboutPanel = () => {
    return(
        <section className={styles.container}>
            <img src={logo.src} alt="logo" />
            <p>
                This store was created in November 2021. We are extremely excited about the development
                of this store. We wait to get many clients after the opening. Each person on this team
                is well prepared to serve anyone who enters in our store. <br /><br />
                - The Boss.
            </p>
        </section>
    )
}