import styles from '/styles/monsterMouse/AlbumOverview.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon ,faBandcamp, faSoundcloud, faApple, faYoutube, faSpotify  } from '@fortawesome/free-brands-svg-icons'
import { faPlay, faPause, faShareNodes } from '@fortawesome/free-solid-svg-icons'

export default function AlbumOverview(){
    return (
        <>
            <section className={styles.overview}>
                <div className={styles.namesAndActions}>
                    <h2 className={styles.albumName}>Vikings Memories</h2>
                    <h3 className={styles.artistName}>SKÁLD</h3>
                    <div className={styles.buttonOptions}>
                        <button className={`${styles.button} ${styles.listenNowButton}`}>
                            <FontAwesomeIcon
                                icon={faPlay} /> &nbsp;
                            Listen Now</button>
                        <button className={`${styles.button} ${styles.shareButton}`}>
                            <FontAwesomeIcon
                                icon={faShareNodes} /> &nbsp;
                            Share</button>
                    </div>
                    <div className={styles.streamingOptions}> 
                        <button className={styles.streamingButton}>
                            <FontAwesomeIcon
                                icon={faAmazon} />
                        </button>
                        <button className={styles.streamingButton}>
                            <FontAwesomeIcon
                                icon={faBandcamp} />
                        </button>
                        <button className={styles.streamingButton}>
                            <FontAwesomeIcon
                                icon={faSoundcloud} />
                        </button>
                        <button className={styles.streamingButton}>
                            <FontAwesomeIcon
                                icon={faApple} />
                        </button>
                        <button className={styles.streamingButton}>
                            <FontAwesomeIcon
                                icon={faYoutube} />
                        </button>
                        <button className={styles.streamingButton}>
                            <FontAwesomeIcon
                                icon={faSpotify} />
                        </button>
                    </div>
                </div>
                <div className={styles.album}>
                    <Image
                        className={styles.albumArt}
                        src="/images/monsterMouse/skald_album_cover.jpg"
                        width={500}
                        height={500}
                        alt="Album art"                    
                        />
                    <h4 className={styles.albumSubtitle}><span className={styles.category}>Tribal</span> - Released October 09, 2020</h4>
                </div>
            </section>
        </>
    )
}