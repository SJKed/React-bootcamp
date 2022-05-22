import Header from '../components/Header';
import Toggle from '../components/Conditionals/Toggle';
import Fruits from '../components/Conditionals/Fruits';
import Shroedinger from '../components/Conditionals/Shroedinger';
import Tabular from '../components/Conditionals/Tabular';
import FakedLogin from '../components/Conditionals/FakedLogin';
import '../styles/conditionals.css';

function Conditionals() {
    return( 
        <div className="Conditionals">
            <Header />
            <div className="ConditionalsWrapper">
                <div className="Toggle Condition">
                    <h1>Toggle</h1>
                    <Toggle />
                </div>
                <div className="Fruits Condition">
                    <h1>Fruits</h1>
                    <Fruits />
                </div>
                <div className="Shroedinger Condition">
                    <h1>Shroedinger</h1>
                    <Shroedinger />
                </div>
                <div className="Tabular Condition">
                    <h1>Tabular</h1>
                    <Tabular />
                </div>
                <div className="FakedLogin Condition">
                    <h1>Faked Login</h1>
                    <FakedLogin />
                </div>
            </div>
        </div>
    )
}

export default Conditionals;