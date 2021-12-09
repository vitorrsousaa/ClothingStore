import { ContactInfo } from '../ContactInfo';
import { ContactPanel } from '../ContactPanel';
import styles from './styles.module.scss';

export const ContactIndex = () => {

    return(
        <section className={styles.container}>
            <ContactPanel />
            <ContactInfo />

        </section>
    )
}