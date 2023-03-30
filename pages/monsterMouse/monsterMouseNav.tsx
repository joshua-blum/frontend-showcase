import styles from '/styles/monsterMouse/Nav.module.css';
import Image from 'next/image';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faTwitter, faTwitch, faFacebook, faDiscord  } from '@fortawesome/free-brands-svg-icons'



export default function Nav(){
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Image src='/images/monsterMouse/monsterMouse_logo_2.png'
                        className={styles.logoImage}
                        width={100} 
                        height={100}
                        alt="Logo" />
                </div>
                <div className={styles.sidebar}>
                    <div className={styles.menu}>
                        Menu
                    </div>
                    <br />
                    <FontAwesomeIcon 
                        className={styles.image}
                        icon={faInstagram}
                         />
                    <FontAwesomeIcon 
                        className={styles.image}
                        icon={faTiktok}
                         />
                    <FontAwesomeIcon 
                        className={styles.image}
                        icon={faTwitter}
                         />
                    <FontAwesomeIcon 
                        className={styles.image}
                        icon={faTwitch}
                         />
                    <FontAwesomeIcon 
                        className={styles.image}
                        icon={faFacebook}
                         />
                    <FontAwesomeIcon 
                        className={styles.image}
                        icon={faDiscord}
                         />
                 </div>
            </header>
        </>
    )
}