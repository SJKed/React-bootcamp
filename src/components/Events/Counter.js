import React, { useState } from 'react';

const Counter = () => {
    let [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <button onClick={() => { if (count != 0) { setCount(count - 1) } } }>
                Decrement
            </button>
        </div>
    );
};

export default Counter;