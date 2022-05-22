import React, { useState } from 'react';

const InputDuplication = () => {
    const [input, setInput] = useState('');
    if (input.length == 0) {
        setInput('Input Duplicated Here');
    }
    return (
        <div>
            <p>{input}</p>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
    );
}

export default InputDuplication;