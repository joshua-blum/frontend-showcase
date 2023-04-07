import {useEffect, useState} from 'react';
import styles from '/styles/monsterMouse/Footer.module.css';

export default function Footer(){
    const [emailAddress, setEmailAddress] = useState("");
    useEffect(() => {

    })

    return (
        <div className={styles.footer}>
            <hr className={styles.pageBreak} />
            <div className={styles.footerMain}>
                <ul className={styles.footerList}>
                    <li className={styles.footerElement}>About MonsterMouse</li>
                    <li className={styles.footerElement}>Contact Us</li>
                    <li className={styles.footerElement}>Careers</li>
                    <li className={styles.footerElement}>News</li>
                    <li className={styles.footerElement}>Press</li>
                </ul>
                <ul className={styles.footerList}>
                    <li className={styles.footerElement}>Terms of Service</li>
                    <li className={styles.footerElement}>Privacy Policy</li>
                </ul>
                <div className={styles.newsletter}>
                    <h3 className={styles.title}>MonsterMouse News</h3>
                    <p className={styles.message}>Don&apos;t miss a thing! Stay up to date with the latest news from us</p>
                    <form className={styles.emailInput}>
                        <input className={styles.email} type="text" value={emailAddress} placeholder="Email address" onChange={(e) => {setEmailAddress(e.target.value)}}></input>
                    </form>
                </div>
            </div>
            <hr className={styles.pageBreak} />
            <div className={styles.credentials}>
                <p className={styles.copyright}>2023 © Joshua Blum &nbsp; | &nbsp; All Rights Reserved</p>
            </div>
        </div>
    )
}