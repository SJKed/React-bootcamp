import React, { useState } from 'react';

const DiceRoller = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    return (
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => {
                setResult(Math.floor(Math.random() * input) + 1);
            }}>Roll</button>
            <p>{result}</p>
        </div>
    )
}

export default DiceRoller;