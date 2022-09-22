import React from 'react';
import { NavLink } from 'react-router-dom';
import { score } from './database';

const scoreShow = () => {
    score = 0;
}

const Result = () => {
    return (
        <section id='result_sec'>
            <h1 id='result_sec_h1'>Your score is: {score} / 10</h1>
            <NavLink to="/" id='main_page' onClick={scoreShow}>Back to main Menu</NavLink>
        </section>
    );
}

export default Result;