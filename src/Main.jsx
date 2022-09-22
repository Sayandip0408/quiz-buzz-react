import React from "react";
import { NavLink } from "react-router-dom";
import ds from '../src/images/ds.png';
import dbms from '../src/images/database.png';
import js from '../src/images/js.png';
import java from '../src/images/java.png';
import python from '../src/images/python.png';
import cpp from '../src/images/cpp.png';
import html from '../src/images/html.png';
import hist from '../src/images/hist.png';
import { load1, load2, load3, load4, load5, load6, load7, load8 } from "./Question";



const subject_choice = [
    {
        id: "sub_1",
        sub: "Data Structure",
        img: ds,
        load: load1,
    },
    {
        id: "sub_2",
        sub: "Database Management System",
        img: dbms,
        load: load2,
    },
    {
        id: "sub_3",
        sub: "C/C++ Programming",
        img: cpp,
        load: load3,
    },
    {
        id: "sub_4",
        sub: "HTML and CSS",
        img: html,
        load: load4,
    },
    {
        id: "sub_5",
        sub: "Python Programming",
        img: python,
        load: load5,
    },
    {
        id: "sub_6",
        sub: "JavaScript Programming",
        img: js,
        load: load6,
    },
    {
        id: "sub_7",
        sub: "Java Programming",
        img: java,
        load: load7,
    },
    {
        id: "sub_8",
        sub: "Indian History",
        img: hist,
        load: load8,
    },

]

const subject_component = (val) => {
    return (
        <div className="main_subjects" id={val.id}>
            <img src={val.img} alt={val.sub} />
            <div className="main_subjects_div">
                <h2>{val.sub}</h2>
                <p>10 Questions</p>
                <NavLink className='main_subjects_btn' to='/Question' onClick={val.load}>Participate</NavLink>
            </div>
        </div>
    );
}

const Main = () => {
    return (
        <section id="main">
            {subject_choice.map(subject_component)}
        </section>
    );
}

export default Main;