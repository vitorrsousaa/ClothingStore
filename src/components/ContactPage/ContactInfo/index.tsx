import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import styles from './styles.module.scss';

export const ContactInfo = () => {

    return(
        <div className={styles.infoContent}>
                <h1>Gostou de todo o conteúdo apresentado ? </h1>
                <h2>Entre em contato comigo !</h2>
                <div className={styles.gitHubContent}>
                    <span>O código deste projeto esta disponível no GitHub.</span>
                    <Link href="https://github.com/vitorrsousaa/ClothingStore" prefetch >
                        <a  target="_blank">
                            <FaGithub />
                        </a>
                    </Link>
                </div>
                <div className={styles.spanContent}>
                    <span>Da uma olhada lá e confere como que ficou.</span>
                    <span>Como sempre tem alguma coisa para melhorar, pode me avisar.</span>
                    <span>E vamos continuar criando funcionalidades para este projeto.</span>
                </div>
            </div>

    )}