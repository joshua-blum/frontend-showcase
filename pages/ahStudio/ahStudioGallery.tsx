import styles from '/styles/ahStudio/Gallery.module.css';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import fadeInStyles from '/styles/ahStudio/Overall.module.css';
import { useInView } from 'react-intersection-observer';

export default function Gallery(){
    const {ref: boxRef1, inView: inView1} = useInView();
    const {ref: boxRef2, inView: inView2} = useInView();
    const {ref: boxRef3, inView: inView3} = useInView();

    return (
        <div className={`${styles.galleryContainer}`}>
            <div ref={boxRef1} className={`${styles.imageBox} ${fadeInStyles.fadeup} ${inView1 ? fadeInStyles.inView: ''}`}>
                <Image className={styles.image} src='/images/ahStudio/product_1.jpeg' alt="Image 1" />
                <div className={styles.overlay}>
                    <p className={styles.subtitle}>Axe</p>
                    <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />   
                </div>  
            </div>
            <div ref={boxRef1} className={`${styles.imageBox} ${fadeInStyles.fadeup} ${inView1 ? fadeInStyles.inView: ''}`}>
                <Image className={styles.image} src='/images/ahStudio/product_2.jpeg' alt="Image 2" />  
                <div className={styles.overlay}>
                    <p className={styles.subtitle}>Cele</p>
                    <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />   
                </div>  
            </div>    
            <div ref={boxRef2} className={`${styles.imageBox} ${fadeInStyles.fadeup} ${inView2 ? fadeInStyles.inView: ''}`}>
                <Image className={styles.image} src='/images/ahStudio/product_3.jpeg' alt="Image 3" />  
                <div className={styles.overlay}>
                    <p className={styles.subtitle}>Au Lait</p>
                    <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />   
                </div>  
            </div>    
            <div ref={boxRef2} className={`${styles.imageBox} ${fadeInStyles.fadeup} ${inView2 ? fadeInStyles.inView: ''}`}>
                <Image className={styles.image} src='/images/ahStudio/product_4.jpeg' alt="Image 4" />  
                <div className={styles.overlay}>
                    <p className={styles.subtitle}>Essence</p>
                    <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />   
                </div>  
            </div>    
            <div ref={boxRef3} className={`${styles.imageBox} ${fadeInStyles.fadeup} ${inView3 ? fadeInStyles.inView: ''}`}>
                <Image className={styles.image} src='/images/ahStudio/product_5.jpeg' alt="Image 5" />  
                <div className={styles.overlay}>
                    <p className={styles.subtitle}>Proxima</p>
                    <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />   
                </div>  
            </div>    
            <div ref={boxRef3} className={`${styles.imageBox} ${fadeInStyles.fadeup} ${inView3 ? fadeInStyles.inView: ''}`}>
                <Image className={styles.image} src='/images/ahStudio/product_6.jpeg' alt="Image 6" />  
                <div className={styles.overlay}>
                    <p className={styles.subtitle}>Fable</p>
                    <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />   
                </div>  
            </div>           
        </div>
    ) 
}