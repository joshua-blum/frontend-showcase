import styles from '/styles/ahStudio/Header.module.css';
import {useState} from 'react';

export default function Header(){
    const [isTransparent, setIsTransparent] = useState(false);
    if(typeof window !== 'undefined'){
    window.addEventListener("scroll", () => {
        if(window.scrollY >= 90) setIsTransparent(true);
        else setIsTransparent(false);
    })}
    
    return (
        <div className={`${styles.header} ${isTransparent ? styles.transparent : null}`}>
            <div className={styles.sliderGroup}>
                <p className={`${styles.sliderHeading} ${styles.currentPage}`}>Home</p>
                <p className={styles.sliderHeading}>Profile</p>
                <p className={styles.sliderHeading}>Contact</p>
            </div>
        </div>
    )
}