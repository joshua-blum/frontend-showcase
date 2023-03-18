import styles from '/styles/ahStudio/Header.module.css';

export default function Header(){
    return (
        <div className={styles.header}>
            <div className={styles.sliderGroup}>
                <p className={`${styles.sliderHeading} ${styles.currentPage}`}>Home</p>
                <p className={styles.sliderHeading}>Profile</p>
                <p className={styles.sliderHeading}>Contact</p>
            </div>
        </div>
    )
}