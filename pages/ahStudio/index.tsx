import Head from 'next/head';
import AhStudioHeader from './ahStudioHeader';
import AhStudioJumbo from './ahStudioJumbo';
import AhStudioGallery from './ahStudioGallery';
import AhStudioFooter from './ahStudioFooter';

export default function Home(){
    return (
        <>
            <Head>
                <title>Ah.studio</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <AhStudioHeader />
            <AhStudioJumbo />
            <AhStudioGallery />
            <AhStudioFooter />
        </>
    )
}