import Head from 'next/head'
import BonsaiHeader from './bonsaiHeader';
import BonsaiPlansAndPricing from './bonsaiPlansAndPricing';
import BonsaiPromo from './bonsaiPromo';
import BonsaiFAQ from './bonsaiFAQ';
import BonsaiFooter from './bonsaiFooter';

export default function Home(){
    return (
        <>
            <Head>
                <title>Bonsai Marketing</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <BonsaiHeader />
            <BonsaiPlansAndPricing />
            <BonsaiPromo />
            <BonsaiFAQ />
            <BonsaiFooter />
        </>
    )
}