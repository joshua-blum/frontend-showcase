import styles from '/styles/ahStudio/Gallery.module.css';
import Image from 'react-bootstrap/Image';

export default function Gallery(){
    return (
        <div className={styles.galleryContainer}>
            <Image className={styles.image} src='/images/ahStudio/product_1.jpeg' />         
            <Image className={styles.image} src='/images/ahStudio/product_2.jpeg' /> 
            <Image className={styles.image} src='/images/ahStudio/product_3.jpeg' /> 
            <Image className={styles.image} src='/images/ahStudio/product_4.jpeg' /> 
            <Image className={styles.image} src='/images/ahStudio/product_5.jpeg' /> 
            <Image className={styles.image} src='/images/ahStudio/product_6.jpeg' />         
        </div>
    ) 
}