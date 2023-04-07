import styles from '/styles/bonsaiMarketing/Promo.module.css';

export default function BonsaiPromo(){
    return (
        <div className={styles.promo}>
            <div className={`jumbotron ${styles.jumbotron}`}>
                <div className={styles.message}>
                    <h4 className="display-4">It&apos;s <span className={styles.green}>your</span> business.</h4>
                    <h4 className="display-4">We&apos;re here to help it grow.</h4>
                </div>
                <p className={`lead ${styles.buttonGroup}`}>
                    <a className={`btn btn-primary ${styles.button}`} href="#" role="button">START FREE</a>
                </p>
            </div>
        </div>
    )
}