import Header from '../components/Header';
import '../styles/events.css';
import Counter from '../components/Events/Counter';
import InputDuplication from '../components/Events/InputDuplication';
import DiceRoller from '../components/Events/DiceRoller';
import SubmitPrevention from '../components/Events/SubmitPrevention';

function Events() {

    const Alert = () => {
        alert("This is an alert");
    }

    const count = 0;

    return (
        <div className="Events">
            <Header />
            <div className="EventsWrapper">
                <div className="Alert Event">
                    <h1>Alert</h1>
                    <p>Never use Aler   ts on your website. They're annoying</p>
                    <button onClick={Alert}>Alert</button>
                </div>
                <div className="Counter Event">
                    <h1>Counter</h1>
                    <Counter />
                </div>
                <div className="InputDuplication Event">
                    <h1>Input Duplication</h1>
                    <InputDuplication />
                </div>
                <div className="DiceRoller Event">
                    <h1>Dice Roller</h1>
                    <DiceRoller />
                </div>
                <div className="SubmitPrevention Event">
                    <h1>Submit Prevention</h1>
                    <SubmitPrevention />
                </div>
            </div>
        </div>
    );
}

export default Events;