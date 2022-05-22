import {useState} from 'react';

const Tabular = () => {
    const [Tab, setTab] = useState(0);
    return (
        <div>
            <div className="tabularTabs">
                <button onClick={() => setTab(1)}>1</button>
                <button onClick={() => setTab(2)}>2</button>
                <button onClick={() => setTab(3)}>3</button>
            </div>
            <div className="tabularContent">
                {Tab == 0 &&
                    <h1>No tab chosen</h1>
                }
                {Tab == 1 &&
                    <h1>Tab 1</h1>
                }
                {Tab == 2 &&
                    <h1>Tab 2</h1>
                }
                {Tab == 3 &&
                    <h1>Tab 3</h1>
                }
            </div>
        </div>
    );
};

export default Tabular;