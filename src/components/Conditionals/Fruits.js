import React, { useState } from 'react';

const Fruits = () => {
    const fruits = ['Apple', 'Banana', 'Orange'];
    return (
        <div>
            <ul>
                {fruits.map((fruit, index) =>
                    <li key={index}>{fruit}</li>
                )}
            </ul>
        </div>
    );
};

export default Fruits;