import React, { useState } from 'react';

const Toggle = () => {
    const [isToggleOn, setToggleOn] = useState(true);
    if (isToggleOn === true) {
        return (
            <div>
                <input type="checkbox" checked={isToggleOn} onChange={() => setToggleOn(!isToggleOn)} />
                <label htmlFor="toggle">Toggle</label>
                <p>This text is only visible when toggled on</p>
            </div>
        );
    } else {
        return (
            <div>
                <input type="checkbox" checked={isToggleOn} onChange={() => setToggleOn(!isToggleOn)} />
                <label htmlFor="toggle">Toggle</label>
            </div>
        );
    }
};

export default Toggle;