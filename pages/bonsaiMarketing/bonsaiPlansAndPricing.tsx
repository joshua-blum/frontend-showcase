import styles from '../../styles/bonsaiMarketing/PlansAndPricing.module.css';
import React, {useState, useEffect} from 'react';
import { setDefaultResultOrder } from 'dns';


export default function BonsaiPlansAndPricing(){
    const [planCardList, setPlanCardList] = useState([<h1>Loading</h1>]);
    const [isYearly, setIsYearly] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/data/bonsaiMarketing/plansAndPricing.json')
        .then((res) => res.json())
        .then((json) => [...json.attributes])
        .then(setPlanCardList)
    }, [planCardList])

    return (
        <div className={styles.plansAndPricing}>
            <div className={styles.header}>
                <div className={styles.title}>Plans &#38; Pricing</div>
                <div className={styles.toggleButton}>Monthly button Yearly</div>
            </div>
            <div className={styles.planCardsList}>
                <div className={styles.planCard}>
                    <h1 className={styles.planTitle}>Card 1</h1>
                    <p className={styles.planDescription}>Here is a stock description</p>
                    <div className={`${styles.planPrice} ${styles.monthlyPlan}`}>$24 <span className={styles.planSubtitle}>/MONTH</span></div>
                    <div className={`${styles.planPrice} ${styles.yearlyPlan}`}>$17  <span className={styles.planSubtitle}>/MONTH</span></div>
                    <div className={`${styles.planSubtitle} ${styles.yearlyPlan}`}>BILLED MONTHLY</div>
                    <br className={styles.planBreak}/>
                    <ul className={styles.planDetails}>
                        <li key={1} className={styles.listElement}>info deet 1</li>
                        <li key={2} className={styles.listElement}>info deet 2</li>
                        <li key={3} className={styles.listElement}>info deet 3</li>
                    </ul>
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