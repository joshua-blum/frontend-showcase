import styles from '/styles/monsterMouse/AlbumOverview.module.css';
import Image from 'next/image';

export default function AlbumOverview(){
    return (
        <section className={styles.overview}>
            <div className={styles.album}>
                <h4 className={styles.albumSubtitle}>Tribal - Released Month DD, YYYY</h4>
                <Image
                    className={styles.albumArt}
                    src="/images/monsterMouse/skald_album_cover.jpg"
                    width={100}
                    height={100}
                    alt="Album art"                    
                    />
            </div>
            <div className={styles.namesAndActions}>
                <h2 className={styles.albumName}>Vikings Memories</h2>
                <h3 className={styles.artistName}>Skald</h3>
                <div className={styles.buttonOptions}>
                    <button className={styles.listenNowButton}>Listen Now</button>
                    <button className={styles.shareButton}>Share</button>
                </div>
            </div>
        </section>
    )
}