import React, { useState } from 'react';
import Chest from '../assets/Chest.png';
import Villager from '../assets/Villager.png';
import Zombie from '../assets/Zombie.png';


const Shroedinger = () => {
    //when chest is clicked, set random number between 0 and 1
    const [isOpen, setOpen] = useState(false);
    if (isOpen === false) {
        return (
            <div>
                <p>Click the chest to find what's inside!</p>
                <img src={Chest} alt="chest" onClick={() => setOpen(true)} className="ShroedingersChest" />
            </div>
        );
    }
    if (isOpen === true) {
        //generate a binary number
        const randomNumber = Math.floor(Math.random() * 2);
        console.log(randomNumber);
        if (randomNumber < 0.5) {
            return (
                <div>
                    <p>You found a front-end developer!</p>
                    <img src={Villager} alt="chest" onClick={() => setOpen(true)} className="ShroedingersChest" />
                </div>
            );
        } else {
            return (
                <div>
                    <p>You found a back-end developer!</p>
                    <img src={Zombie} alt="chest" onClick={() => setOpen(true)} className="ShroedingersChest" />
                </div>
            );
        }
    }
};

export default Shroedinger;