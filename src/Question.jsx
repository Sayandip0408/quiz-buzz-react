import React from 'react';
import { NavLink } from 'react-router-dom';
import { data_structure, database, c_cpp, python, htmlcss, javascript, java, history } from './database';

let sub;
let sub_name;

const load1 = () => {
    sub = data_structure;
    sub_name = 'Data Structure';
    console.log(sub);
}

const load2 = () => {
    sub = database;
    sub_name = 'Database Management System';
    console.log(sub);
}
const load3 = () => {
    sub = c_cpp;
    sub_name = 'C and C++ Programming';
    console.log(sub);
}
const load4 = () => {
    sub = htmlcss;
    sub_name = 'HTML and CSS';
    console.log(sub);
}
const load5 = () => {
    sub = python;
    sub_name = 'Python Programming';
    console.log(sub);
}
const load6 = () => {
    sub = javascript;
    sub_name = 'JavaScript Programming';
    console.log(sub);
}
const load7 = () => {
    sub = java;
    sub_name = 'Java Programming';
    console.log(sub);
}
const load8 = () => {
    sub = history;
    sub_name = 'Indian History';
    console.log(sub);
}



const getCheckAnswer = (ans1, ans2, ans3, ans4) => {
    let answer;
    let a1 = document.getElementById(ans1);
    let a2 = document.getElementById(ans2);
    let a3 = document.getElementById(ans3);

    if (a1.checked) {
        answer = ans1;
    }
    else if (a2.checked) {
        answer = ans2;
    }
    else if (a3.checked) {
        answer = ans3;
    }
    else {
        answer = ans4;
    }
    return answer;
};


const questionLoad = (val) => {
    return (
        <div id='question_div'>
            < h2 id='question' > {val.qid}. {val.question} </h2 >
            <ul id={val.qid}>
                <li>
                    <input type="radio" name="answer" id={val.ansid1} className="answer" required></input>
                    <label htmlFor={val.ansid1} id="option1">{val.a}</label>
                </li>
                <li>
                    <input type="radio" name="answer" id={val.ansid2} className="answer" required></input>
                    <label htmlFor={val.ansid2} id="option2">{val.b}</label>
                </li>
                <li>
                    <input type="radio" name="answer" id={val.ansid3} className="answer" required></input>
                    <label htmlFor={val.ansid3} id="option3">{val.c}</label>
                </li>
                <li>
                    <input type="radio" name="answer" id={val.ansid4} className="answer" required></input>
                    <label htmlFor={val.ansid4} id="option4">{val.d}</label>
                </li>
            </ul>
            <p id={val.hide_div_id}></p>
            {/* <p id={val.correct}></p> */}
            <button id={val.save_id} className='save' onClick={val.func}>Save</button>
        </div >
    );
}

const Question = () => {
    return (
        <section id='question_container'>
            <h1 id='sub_heading'>{sub_name}</h1>
            <p className='guidelines'><b>***</b> Click on the <b>Save</b> button associated with questions after answering the question.</p>
            <p className='guidelines'><b>***</b> After answering all the question click on the <b>Submit</b> button in the bottom of question section.</p>
            {sub.map(questionLoad)}
            <NavLink to="/Result" className="submit-btn" id="submit">Submit</NavLink>
        </section>
    );
}

export { Question, load1, load2, load3, load4, load5, load6, load7, load8, getCheckAnswer };