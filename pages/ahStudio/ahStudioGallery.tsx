import styles from '/styles/ahStudio/Gallery.module.css';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Gallery(){
    return (
        <div className={styles.galleryContainer}>
            <div className={styles.imageBox}>
                <Image className={styles.image} src='/images/ahStudio/product_1.jpeg' />
                <div className={styles.overlay}>
                    <p className={styles.subtitle}>Axe</p>
                    <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />   
                </div>  
            </div>
            <div className={styles.imageBox}>
                <Image className={styles.image} src='/images/ahStudio/product_2.jpeg' />  
                <div className={styles.overlay}>
                    <p className={styles.subtitle}>Cele</p>
                    <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />   
                </div>  
            </div>    
            <div className={styles.imageBox}>
                <Image className={styles.image} src='/images/ahStudio/product_3.jpeg' />  
                <div className={styles.overlay}>
                    <p className={styles.subtitle}>Au Lait</p>
                    <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />   
                </div>  
            </div>    
            <div className={styles.imageBox}>
                <Image className={styles.image} src='/images/ahStudio/product_4.jpeg' />  
                <div className={styles.overlay}>
                    <p className={styles.subtitle}>Essence</p>
                    <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />   
                </div>  
            </div>    
            <div className={styles.imageBox}>
                <Image className={styles.image} src='/images/ahStudio/product_5.jpeg' />  
                <div className={styles.overlay}>
                    <p className={styles.subtitle}>Proxima</p>
                    <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />   
                </div>  
            </div>    
            <div className={styles.imageBox}>
                <Image className={styles.image} src='/images/ahStudio/product_6.jpeg' />  
                <div className={styles.overlay}>
                    <p className={styles.subtitle}>Fable</p>
                    <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />   
                </div>  
            </div>           
        </div>
    ) 
}