import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephoneFill } from 'react-icons/bs';

import styles from './styles.module.scss';

export const ContactPanel = () => {

    return(
        <section className={styles.container}>
            <div className={styles.infoContent}>
                <h1>Gostou de todo o conteúdo apresentado ? </h1>
                <h2>Entre em contato comigo !</h2>
                <div className={styles.gitHubContent}>
                    <span>O código deste projeto esta disponível no GitHub.</span>
                    <a href="https://github.com/vitorrsousaa/ClothingStore" target="_blank">
                        <FaGithub />
                    </a>
                </div>
                <div className={styles.spanContent}>
                    <span>Da uma olhada lá e confere como que ficou.</span>
                    <span>Como sempre tem alguma coisa para melhorar, pode me avisar.</span>
                    <span>E vamos continuar criando funcionalidades para este projeto.</span>
                </div>
            </div>

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