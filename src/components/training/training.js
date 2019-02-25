import React from 'react';

import './training.css';

import Game from '../game';

const Training = () =>{
    return (
        <div className="training">
            <h2>Тренировки</h2>
            <Game type = "wordTranslate" />
        </div>
    );
}

export default Training;