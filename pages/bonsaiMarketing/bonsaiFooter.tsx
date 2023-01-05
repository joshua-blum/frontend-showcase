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
    return listOfLinks.map((link: {key: string, name: string, url: string}) => {
        return <li className={styles.listElement} key={`${link.key}`}>
            <a className={styles.listElement} href={link.url}>{link.name}</a>
        </li>
    })
}

function createProducts(){
    const productTitles = ["Proposals", "Contracts", "Invoicing", "Client CRM", "Time Tracking", "Forms", "Accounting", "Bonsai Tax", "Bonsai Cash", "Pricing", "Bonsai Reviews"];
    const productObjects = productTitles.map((productName) => {
        return {
            key: generateKey(5),
            name: productName,
            url: 'http://localhost:3000/bonsaiMarketing'
        }
    });
    return formatFooterList(productObjects);
}

function createFreeResources(){
    const freeResources = ["Freelance Resources", "Freelance Blog by Bonsai", "How to Write a Contract", "Online Signature Maker", "Self-Employed Taxes Hub", "Self-Employed Tax Calculator", "Self-Employed Tax Deductions", "Templates"];
    const resourceObjects = freeResources.map((resourceName) => {
        return {
            key: generateKey(5),
            name: resourceName,
            url: 'http://localhost:3000/bonsaiMarketing'
        }
    });
    return formatFooterList(resourceObjects);
}

function createBonsai(){
    const companyInfo = ["About", "Careers", "Support", "LinkedIn", "Twitter", "Privacy Policy", "Legal", "Affiliates", "Write For Us"];
    const companyObjects = companyInfo.map((companyInfoName) => {
        return {
            key: generateKey(5),
            name: companyInfoName,
            url: 'http://localhost:3000/bonsaiMarketing'
        }
    });
    return formatFooterList(companyObjects);
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

    return (
        <div className={styles.footer}>
            <div className={styles.column}>
                <h6 className={styles.listTitle}>PRODUCT</h6>
                <ul className={styles.list}>
                    {createProducts()}
                </ul>
            </div>
            <div className={styles.column}>
                <h6 className={styles.listTitle}>FREE RESOURCES</h6>
                <ul className={styles.list}>
                    {createFreeResources()}
                </ul>
            </div>
            <div className={styles.column}>
                <h6 className={styles.listTitle}>BONSAI</h6>
                <ul className={styles.list}>
                    {createBonsai()}
                </ul>
            </div>
        </div>

    )
}