import {useEffect, useState, useRef} from 'react';
import styles from '/styles/monsterMouse/SongList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player';


function makeSongList(artistName: string, albumList: {id: number, title: string, duration: string}[]){
    const audioPlayer = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        const prevState = isPlaying;
        setIsPlaying(!isPlaying);
        if(!prevState) audioPlayer.current?.play();
        else audioPlayer.current?.pause();
    }

    let songList = albumList.map(({id, title, duration}) => {
        return (
            <div key={id} className={styles.song}>
                <div className={styles.songContainer}>
                    <div className={styles.songId}>{id}</div>
                    <button className={styles.button} onClick={togglePlay}>
                        <FontAwesomeIcon className={styles.playIcon} icon={isPlaying ? faPause : faPlay} /> 
                        <audio ref={audioPlayer} className={styles.audioPlayer} src="/data/monsterMouse/frosty-rap.mp3">
                            your browser is hurting
                        </audio>
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

function displayPlayer(){
    const [windowLoaded, setWindowLoaded] = useState(false);
    useEffect(() => {
        if(typeof window !== undefined) setWindowLoaded(true);
    }, []);
    return (
        <section className={styles.musicVideo}>
                <h2 className={styles.title}>Music Video - Fimbulvetr</h2>
                <div className={styles.video}>
                    {windowLoaded && <ReactPlayer className={styles.video} url="https://www.youtube.com/watch?v=W22lRPhQYmc" muted={true} controls={true}/>}
                </div>
        </section>
    )
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
        <>
            <section className={styles.songList}>
                <h2 className={styles.title}>Track List</h2>
                {makeSongList(artistName, albumList)}
            </section>
            {displayPlayer()}
        </>
    )
}