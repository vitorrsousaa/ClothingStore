import { TiSocialFacebook, TiSocialInstagram, TiSocialPinterest } from 'react-icons/ti';

import styles from './styles.module.scss';

export function SocialContent() {
    return(
        <div className={styles.socialContent}>
                <span>SHARE: </span>
                <TiSocialInstagram />
                <TiSocialFacebook />
                <TiSocialPinterest />
        </div>
    )
    
}