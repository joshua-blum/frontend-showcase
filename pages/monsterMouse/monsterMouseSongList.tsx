import styles from '/styles/monsterMouse/SongList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faShareNodes } from '@fortawesome/free-solid-svg-icons'


function makeSongList(artistName: string, albumList: {id: number, title: string, duration: string}[]){
    let songList = albumList.map(({id, title, duration}) => {
        return (
            <div className={styles.song}>
                <div className={styles.songContainer}>
                    <div className={styles.songId}>{id}</div>
                    <button className={styles.button}>
                        <FontAwesomeIcon className={styles.playIcon} icon={faPlay} /> 
                    </button>
                    <div className={styles.songDetail}>
                        <div className={styles.songTitle}>{title}</div>
                        <div className={styles.songArtist}>{artistName}</div>
                    </div>
                </div>
                <div className={styles.songContainer}>
                    <div className={styles.songDuration}>{duration} &nbsp; &nbsp;  |  </div>
                    <button className={styles.button}>
                        <FontAwesomeIcon className={styles.shareIcon} icon={faShareNodes} /> 
                    </button>
                </div>
            </div>
        )
    });
    return songList;
}

export default function SongList(){

    const artistName : string = 'SKÁLD'
    const albumList : {id: number, title: string, duration: string}[] = [
        {
            id: 1,
            title: "Fimbulvetr",
            duration: "3:16"
        },
        {
            id: 2,
            title: "Jörmungrund",
            duration: "3:35"
        },
        {
            id: 3,
            title: "Grótti",
            duration: "2:53"
        },
        {
            id: 4,
            title: "Norðrljós",
            duration: "3:20"
        },
        {
            id: 5,
            title: "Sækonungar",
            duration: "3:19"
        },
        {
            id: 6,
            title: "Þistill Mistill Kistill",
            duration: "3:04"
        },
        {
            id: 7,
            title: "Sólarljóð",
            duration: "3:14"
        },
        {
            id: 8,
            title: "Víðförla",
            duration: "3:40"
        },
        {
            id: 9,
            title: "Hafgerðingar",
            duration: "3:11"
        },
        {
            id: 10,
            title: "Í dansinum",
            duration: "2:45"
        },
        {
            id: 11,
            title: "Nýr",
            duration: "3:58"
        }
    ]

    return (
        <section className={styles.songList}>
            <h2 className={styles.title}>Track List</h2>
            {makeSongList(artistName, albumList)}
        </section>
    )
}