import styles from '../../styles/bonsaiMarketing/PlansAndPricing.module.css';
import React, {useState, useEffect} from 'react';

function formatPlanCards(isYearly: boolean, planCardList: any){
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
                {isYearly ? 
                    (<>
                        <div className={`${styles.planPrice} ${styles.yearlyPlan}`}>${planCard.priceYearly}  <span className={styles.planSubtitle}>/MONTH</span></div>
                        <div className={`${styles.planSubtitle} ${styles.yearlyPlan}`}>BILLED MONTHLY</div>
                    </>) :
                    (<div className={`${styles.planPrice} ${styles.monthlyPlan}`}>${planCard.priceMonthly} <span className={styles.planSubtitle}>/MONTH</span></div>)
                }
                <br className={styles.planBreak}/>
                <ul className={styles.planDetails}>
                    {planCard.details ? 
                        planCard.details.map((detail: string) => {return <li key={detail} className={styles.listElement}>{detail}</li>}) 
                        : <h1>Loading...</h1>}
                </ul>
                <button className={`btn btn-secondary ${styles.startPlanButton}`}>START FREE </button>
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

    const planCardHTML = formatPlanCards(isYearly, planCardList);


    return (
        <>

        <div className={styles.plansAndPricing}>
            <div className={styles.header}>
                <div className={styles.title}>Plans &#38; Pricing</div>
                <div className={styles.toggleButton}>
                <label className={styles.switch}>
                    <input className={styles.checkbox} type="checkbox" id="switch" hidden/>
                    <span className={`${styles.slider} ${styles.round}`}></span>
                    <span className={styles.toggleLabelMonthly}>Monthly</span>
                    <span className={styles.toggleLabelYearly}>Yearly</span>
                </label>
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