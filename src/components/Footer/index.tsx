import Link from 'next/link';

import styles from './styles.module.scss';

export const Footer = () => {

    return(
        <footer className={styles.container}>
            <div className={styles.content}>
                <div className={styles.contentExplore}>
                    <h1>EXPLORE</h1>
                    <Link href='/about'>
                        <a>About</a>
                    </Link>
                    <Link href='/shop'>
                        <a>Shop</a>
                    </Link>
                </div>
                <div>
                    <h1>TALK TO ME</h1>
                    <Link href='/contact'>
                        <a>Contact</a>
                    </Link>
                </div>
                <div className={styles.clothingContainer}>
                    <h1>CLOTHING STORE</h1>
                    <span>
                        This store was created in November 2021. We are extremely excited about the development
                        of this store. We wait to get many clients after the opening. Each person on this team
                        is well prepared to serve anyone who enters in our store. <br /><br />
                        Project made to get a job! <br /><br />
                        The Boss.
                    </span>
                </div>
            </div>

            <div className={styles.contentFooter}>
                <h2>CLOTHING STORE | 2021</h2>
                <span>CREATED BY VITOR SOUSA!</span>
            </div>
        </footer>
    )
    
}