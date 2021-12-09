import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephoneFill } from 'react-icons/bs';

import styles from './styles.module.scss';

export const ContactPanel = () => {

    return(
        <section className={styles.container}>

            <div className={styles.contactContent}>
                <div>
                    <h2>Quer entrar em contato pelo Whatsapp?</h2>
                    <div className={styles.infoContactContent}>
                        <BsTelephoneFill />
                        <span>+55 21 99821-7463</span>
                    </div>
                </div>
                <div>
                    <h2>Ah, você prefere e-mail então?</h2>
                    <div className={styles.infoContactContent}>
                        <AiOutlineMail />
                        <span>v.sousa.cf@gmail.com</span>
                    </div>
                </div>
                <div>
                    <h2>Oportunidade de emprego é pelo Linkedin, não pensei nisso!</h2>
                    <div className={styles.infoContactContent}>
                        <a href="https://www.linkedin.com/in/vitorr-sousaa/">
                            <FaLinkedin />
                        </a>
                        <span>Vitorr.Sousaa</span>
                    </div>
                </div>
                <div>
                    <h2>Confere meus outros projetos no GitHub!</h2>
                    <div className={styles.infoContactContent}>
                        <a href="https://github.com/vitorrsousaa">
                            <FaGithub />
                        </a>
                        <span>vitorrsousaa</span>
                    </div>
                </div>
            </div>
        </section>
    )
}