import styles from '../../styles/bonsaiMarketing/PlansAndPricing.module.css';
import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

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
            <div key={`${planCard.id}-${planCard.title}`} className={styles.planCard}>
                <h1 className={styles.planTitle}>{planCard.title}</h1>
                <p className={styles.planDescription}>{planCard.description}</p>
                {isYearly ? 
                    (<>
                        <div className={`${styles.planPrice} ${styles.yearlyPlan}`}>${planCard.priceYearly}  <span className={styles.planSubtitle}>/MONTH</span></div>
                        <div className={`${styles.planSubtitle} ${styles.yearlyPlan}`}>BILLED MONTHLY</div>
                    </>) :
                    (<div className={`${styles.planPrice} ${styles.monthlyPlan}`}>${planCard.priceMonthly} <span className={styles.planSubtitle}>/MONTH</span></div>)
                }
                <hr className={styles.planBreak}/>
                <ul className={styles.planDetails}>
                    {planCard.details ? 
                        planCard.details.map((detail: string) => {return <li key={detail} className={styles.listElement}>
                            <FontAwesomeIcon icon={faCheck} className={styles.listDecoration}/> &nbsp;
                            {detail}</li>}) 
                        : <h1>Loading...</h1>}
                </ul>
                <button className={`btn btn-secondary ${styles.startPlanButton}`}>START FREE </button>
            </div>
            )
        })
}

function formatAddOns(addOnsList: any){
    return addOnsList.map(
        (addOn: 
            {
                id: string, 
                title: string, 
                description: string,
                price: number,
                detailLink: string
            }
        ) => {   
        return (
            <div key={`${addOn.id}-${addOn.title}`} className={styles.addOnCard}>
                <div className={styles.addOnDetails}>
                    <h1 className={styles.addOnTitle}>{addOn.title}</h1>
                    <p className={styles.addOnDescription}>{addOn.description}</p>
                    {addOn.detailLink ?
                        <a className={styles.addOnLink} href={addOn.detailLink}>Learn More &gt; </a> :
                        null}
                </div>
                {addOn.price ? 
                    <div className={styles.addOnPrice}>${addOn.price} <span className={styles.planSubtitle}>/MONTH</span></div> :
                    <div className={styles.addOnPrice}>Free</div>
                }
            </div>
            )
        })
}


export default function BonsaiPlansAndPricing(){
    const [planCardList, setPlanCardList] = useState([<h1 key="loadingPlanCards">Loading...</h1>]);
    const [isYearly, setIsYearly] = useState(false);
    const [addOnsList, setAddOnsList] = useState([<h1 key="loadingAddOns">Loading...</h1>])

    useEffect(() => {
        fetch('http://localhost:3000/data/bonsaiMarketing/plansAndPricing.json')
        .then((res) => res.json())
        .then((json) => [...json.attributes])
        .then((res) => setPlanCardList(res));

        fetch('http://localhost:3000/data/bonsaiMarketing/addOns.json')
        .then((res) => res.json())
        .then((json) => [...json.attributes])
        .then((res) => setAddOnsList(res));
    }, [])

    const planCardHTML = formatPlanCards(isYearly, planCardList);
    const addOnHTML = formatAddOns(addOnsList);

    return (
        <>
        <div className={styles.plansAndPricing}>
            <div className={styles.header}>
                <div className={styles.title}>Plans &#38; Pricing</div>
                <hr className={styles.headerBreak} />
                <div className={styles.toggleButton}>
                    <label className={styles.switch}>
                        <input className={styles.checkbox} type="checkbox" id="switch" onClick={() => setIsYearly(!isYearly)} hidden/>
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
                {addOnHTML}
            </div>
        </div>
        </>
    )
}