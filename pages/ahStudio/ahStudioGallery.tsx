import styles from '/styles/ahStudio/Gallery.module.css';
import Image from 'react-bootstrap/Image';

export default function Gallery(){
    return (
        <div className={styles.galleryContainer}>
            <div className={styles.imageBox}>
                <Image className={styles.image} src='/images/ahStudio/product_1.jpeg' />
                <div className={styles.overlay}>
                    <p className={styles.subtitle}>Subtitle</p>
                    <p className={styles.icon}>{`->`}</p>    
                </div>  
            </div>
            <div className={styles.imageBox}>
                <Image className={styles.image} src='/images/ahStudio/product_2.jpeg' />  
                <div className={styles.overlay}>
                    <p className={styles.subtitle}>Subtitle</p>
                    <p className={styles.icon}>{`->`}</p>    
                </div>  
            </div>    
            <div className={styles.imageBox}>
                <Image className={styles.image} src='/images/ahStudio/product_3.jpeg' />  
                <div className={styles.overlay}>
                    <p className={styles.subtitle}>Subtitle</p>
                    <p className={styles.icon}>{`->`}</p>    
                </div>  
            </div>    
            <div className={styles.imageBox}>
                <Image className={styles.image} src='/images/ahStudio/product_4.jpeg' />  
                <div className={styles.overlay}>
                    <p className={styles.subtitle}>Subtitle</p>
                    <p className={styles.icon}>{`->`}</p>    
                </div>  
            </div>    
            <div className={styles.imageBox}>
                <Image className={styles.image} src='/images/ahStudio/product_5.jpeg' />  
                <div className={styles.overlay}>
                    <p className={styles.subtitle}>Subtitle</p>
                    <p className={styles.icon}>{`->`}</p>    
                </div>  
            </div>    
            <div className={styles.imageBox}>
                <Image className={styles.image} src='/images/ahStudio/product_6.jpeg' />  
                <div className={styles.overlay}>
                    <p className={styles.subtitle}>Subtitle</p>
                    <p className={styles.icon}>{`->`}</p>    
                </div>  
            </div>           
        </div>
    ) 
}