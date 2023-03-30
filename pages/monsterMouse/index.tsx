import Nav from './monsterMouseNav';
import AlbumOverview from './monsterMouseAlbumOverview';
import SongList from './monsterMouseSongList';
import Footer from './monsterMouseFooter';

export default function Home(){
    return (
        <>
            <Nav />
            <AlbumOverview />
            <SongList />
            <Footer />
        </>
    )
}