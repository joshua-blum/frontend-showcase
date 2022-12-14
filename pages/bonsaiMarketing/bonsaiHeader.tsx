import styles from '../../styles/bonsaiMarketing/Header.module.css';
import Image from 'next/image'
import { setSyntheticLeadingComments } from 'typescript';

export default function BonsaiHeader(){
    return (
        <div className={styles.header}>
            <div className={styles.headerElement}>
                <Image
                    className={styles.logo}
                    width={150}
                    height={40}
                    src="/images/bonsaiMarketing/bonsai_logo.svg"
                    alt="Bonsai logo" />
            </div>
            <div className={styles.headerElement}>
                <div className="dropdown">
                    <button className={`btn btn-secondary dropdown-toggle ${styles.centerElement}`} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Product
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className={`btn btn-secondary dropdown-toggle ${styles.centerElement}`} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Templates
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <button className={styles.centerElement}>Pricing</button>
                <button className={styles.centerElement}>Reviews</button>
            </div>
            <div className={styles.headerElement}>
                <button className={`btn ${styles.button}`}>LOG IN</button>
                <button className={`btn ${styles.button}`}>START FREE</button>
            </div>
        </div>
    )
}