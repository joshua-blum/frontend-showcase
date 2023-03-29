import styles from '/styles/ahStudio/Jumbo.module.css';
import fadeInStyles from '/styles/ahStudio/Overall.module.css';
import { useInView } from 'react-intersection-observer';

export default function Jumbo(){
    const {ref: boxRef, inView} = useInView();
    return (<>
    <div className={`jumbotron jumbotron-fluid ${styles.jumbo}`}>
        <div ref={boxRef} className={`${styles.container} ${fadeInStyles.fadeup} ${inView ? fadeInStyles.inView: ''}`}>
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