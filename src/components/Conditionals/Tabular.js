import React, { useState } from 'react';

const Tabular = () => {
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

export default Tabular;