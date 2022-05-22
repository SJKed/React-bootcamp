import logo from '../logo.svg';
import Header from '../components/Header';
import '../styles/home.css';

function Home() {
    return (
        <div className="Home">
            <Header />
            <img src={logo} className="ReactLogo" alt="logo" />
            <p>
                Edit <code>src/pages/Home.js</code> and save to reload.
            </p>
            <a
                className="HomeLink"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </div>
    );
}

export default Home;