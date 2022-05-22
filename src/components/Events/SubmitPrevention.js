import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { useState } from 'react';

const SubmitPrevention = () => {
    //prevent submit button from submitting form
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log('submit prevented');
            }}>
                <input type="text" />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default SubmitPrevention;