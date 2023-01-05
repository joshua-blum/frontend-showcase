import styles from '/styles/bonsaiMarketing/Footer.module.css';

function generateKey(keyLength: number){
    let options = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let outputKey = '';
    for(let i = 0; i < keyLength; i++){
        outputKey += options.charAt(Math.floor(Math.random() * options.length));
    }
    return outputKey;
}

function formatFooterList(listOfLinks: { key: string; name: string; url: string; }[]){
    return listOfLinks.map((link: {key: string, name: string, url: string}, index) => {
        return <li className={styles.listElement} key={`${link.key}`}>
            <a href={link.url}>{link.name}</a>
        </li>
    })
}


export default function BonsaiFooter(){
    const productTitles = ["Proposals", "Contracts", "Invoicing", "Client CRM", "Time Tracking", "Forms", "Accounting", "Bonsai Tax", "Bonsai Cash", "Pricing", "Bonsai Reviews"];
    const productObjects = productTitles.map((productName) => {
        return {
            key: generateKey(5),
            name: productName,
            url: 'http://localhost:3000/bonsaiMarketing'
        }
    });
    const products = formatFooterList(productObjects);


    return (
        <div className={styles.footer}>
            <div className={styles.column}>
                <h4>Product</h4>
                <ul className={styles.list}>
                    {products}
                    {/* <li className={styles.listElement} key={1}>Proposals</li> */}
                </ul>
            </div>
            <div className={styles.column}>
                Here is column 2 (note 2 groups!)
            </div>
            <div className={styles.column}>
                Here is column 3
            </div>
        </div>

    )
}