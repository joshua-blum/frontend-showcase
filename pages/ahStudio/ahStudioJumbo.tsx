import styles from '/styles/ahStudio/Jumbo.module.css';

export default function Jumbo(){

    return (<>
    <div className={`jumbotron jumbotron-fluid ${styles.jumbo}`}>
        <div className={styles.container}>
            <h1 className={styles.header}>A brand and product desminor working with clients locally</h1>
            <div className={styles.bubbleRow}>
                <p className={styles.bubble}>Expertise</p>
                <p className={styles.bubble}>Branding</p>
                <p className={styles.bubble}>Product</p>
                <p className={styles.bubble}>Design Systems</p>
            </div>
        </div>
    </div>
    </>)
}