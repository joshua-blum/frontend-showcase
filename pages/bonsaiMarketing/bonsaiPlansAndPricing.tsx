import styles from '../../styles/bonsaiMarketing/PlansAndPricing.module.css';
import React, {useState, useEffect} from 'react';

function formatPlanCards(planCardList: any){
    return planCardList.map(
        (planCard: 
            {
                id: string, 
                title: string, 
                description: string,
                priceMonthly: number,
                priceYearly: number,
                details: [],
                isPopular: boolean
            }
        ) => {   
        return (
            <div className={styles.planCard}>
                <h1 className={styles.planTitle}>{planCard.title}</h1>
                <p className={styles.planDescription}>{planCard.description}</p>
                <div className={`${styles.planPrice} ${styles.monthlyPlan}`}>${planCard.priceMonthly} <span className={styles.planSubtitle}>/MONTH</span></div>
                <div className={`${styles.planPrice} ${styles.yearlyPlan}`}>${planCard.priceYearly}  <span className={styles.planSubtitle}>/MONTH</span></div>
                <div className={`${styles.planSubtitle} ${styles.yearlyPlan}`}>BILLED MONTHLY</div>
                <br className={styles.planBreak}/>
                <ul className={styles.planDetails}>
                    {planCard.details ? 
                        planCard.details.map((detail: string) => {return <li key={detail} className={styles.listElement}>{detail}</li>}) 
                        : <h1>Loading...</h1>}
                </ul>
            </div>
            )
        })
}


export default function BonsaiPlansAndPricing(){
    const [planCardList, setPlanCardList] = useState([<h1>Loading...</h1>]);
    const [isYearly, setIsYearly] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/data/bonsaiMarketing/plansAndPricing.json')
        .then((res) => res.json())
        .then((json) => [...json.attributes])
        .then((res) => setPlanCardList(res))
    }, [])

    const planCardHTML = formatPlanCards(planCardList);


    return (
        <>
        <div className={styles.plansAndPricing}>
            <div className={styles.header}>
                <div className={styles.title}>Plans &#38; Pricing</div>
                <div className={styles.toggleButton}>
                    monthly button yearly
                </div>
            </div>
            <div className={styles.planCardsList}>
                {planCardHTML}
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
        </>
    )
}