import styles from '/styles/bonsaiMarketing/FAQ.module.css';
import React, {useState, useEffect} from 'react';

export default function BonsaiFAQ(){
    // const[visibleStatus, setVisibleStatus] = useState({ {1: false}; {2: false}; {3: false}; {4: false} } )

    return (
        <div className={styles.faq}>
            <h3 className={styles.title}>Frequently Asked Questions</h3>
            <div className={styles.questionGroup}>
                <div className={styles.question}>Here is a question? &nbsp;
                    <button className={styles.dropDownButton} 
                    // onClick={() => {useState(previousState => 
                    //     return [!previousState[0], previousState[1], previousState[2], previousState[3]]
                    // )}}
                    >{`>`}</button>
                </div>
                <div className={styles.answer} id="demo" >Here is an answer</div>
            </div>
        </div>
    )
}