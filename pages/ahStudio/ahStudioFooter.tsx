import jumboStyles from '/styles/ahStudio/Jumbo.module.css';
import footerStyles from '/styles/ahStudio/Footer.module.css';
import fadeInStyles from '/styles/ahStudio/Overall.module.css';
import { useInView } from 'react-intersection-observer';

export default function Footer(){
    const {ref: boxRef, inView} = useInView();
    return (<>
        <div className={`jumbotron jumbotron-fluid ${jumboStyles.jumbo}`}>
            <div ref={boxRef} className={`${jumboStyles.container} ${fadeInStyles.fadeup} ${inView ? fadeInStyles.inView: ''}`}>
                <h4 className={`${jumboStyles.header} ${footerStyles.header}`}>Let's work together.<br/><span className={footerStyles.grey}>Get in touch.</span></h4>
            </div>
        </div>
        <footer className={footerStyles.mainFooter}>
            <div className={footerStyles.branding}>
                © Joshua Blum 2023
            </div>
            <div className={footerStyles.socials}>
                <a className={footerStyles.button} href="https://www.twitter.com">Twitter</a>
                <a className={footerStyles.button} href="https://www.linkedin.com">LinkedIn</a>
                <a className={footerStyles.button} href="mailto:blum.r.joshua@gmail.com?subject=I found your site">Mail</a>
            </div>
        </footer>
        </>)
}