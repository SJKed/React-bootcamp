import Header from '../components/Header';
import '../styles/styling.css';
import BettyWhitePic from '../components/assets/Betty_White.jpg';

function Styling() {
    const BettyWhite = {
        name: 'Betty White',
        job: 'Actress',
        life: 'January 17, 1922 - December 31, 2021',
        imgFile: BettyWhitePic,
        quote: 'My mother always used to say, “The older you get, the better you get. Unless you’re a banana.”'
    }
    return (
        <div className="Styling">
            <Header />
            <div className="BettyCard">
                <img src={BettyWhite.imgFile} alt={BettyWhite.name} />
                <div className="BettyCard-text">
                    <h2>{BettyWhite.name}</h2>
                    <p>{BettyWhite.job}</p>
                    <p>{BettyWhite.life}</p>
                    <p>{BettyWhite.quote}</p>
                </div>
            </div>
        </div>
    )
}

export default Styling;