import styles from '../../styles/bonsaiMarketing/PlansAndPricing.module.css';


export default function BonsaiPlansAndPricing(){
    return (
        <div className={styles.plansAndPricing}>
            <div className={styles.header}>
                <div className={styles.title}>Plans &#38; Pricing</div>
                <div className={styles.toggleButton}>Monthly button Yearly</div>
            </div>
            <div className={styles.planCardsList}>
                <div className={styles.planCard}>
                    Card 1
                </div>
                <div className={styles.planCard}>
                    Card 2
                </div>
                <div className={styles.planCard}>
                    Card 3
                </div>
            </div>
            <div className={styles.header}>Super charge your work with add-ons</div>
            <div className={styles.addOnsList}>
                <div className={styles.addOnCard}>
                    Add On 1
                </div>
                <div className={styles.addOnCard}>
                    Add On 2
                </div>
                <div className={styles.addOnCard}>
                    Add On 3
                </div>
            </div>
        </div>
    )
}