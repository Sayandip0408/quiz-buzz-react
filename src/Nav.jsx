import React from 'react';
import { BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { score } from './database';
import { ImCross, ImMenu } from 'react-icons/im';

// const nav_btns = [
//     {
//         id: "home",
//         content: "Home",
//         bgcol: function () {
//             let home = document.getElementById('home');
//             let subjects = document.getElementById('subjects');
//             let dev = document.getElementById('dev');
//             subjects.style.backgroundColor = 'transparent'
//             home.style.backgroundColor = '#9088e6';
//             dev.style.backgroundColor = 'transparent';
//             home.style.color = 'white';
//             window.location = '/';
//         },
//     },
//     {
//         id: "subjects",
//         content: "Contact",
//         bgcol: function () {
//             let home = document.getElementById('home');
//             let subjects = document.getElementById('subjects');
//             let dev = document.getElementById('dev');
//             home.style.backgroundColor = 'transparent'
//             subjects.style.backgroundColor = '#9088e6';
//             dev.style.backgroundColor = 'transparent';
//             subjects.style.color = 'white';
//             window.location = '/Contact';
//         },
//     },
//     {
//         id: "dev",
//         content: "Developer",
//         bgcol: function () {
//             let home = document.getElementById('home');
//             let subjects = document.getElementById('subjects');
//             let dev = document.getElementById('dev');
//             subjects.style.backgroundColor = 'transparent'
//             dev.style.backgroundColor = '#9088e6';
//             home.style.backgroundColor = 'transparent';
//             dev.style.color = 'white';
//             window.location = 'https://sayandip2.netlify.app';
//         },
//     },
// ]

// const load_nav_btns = (val) => {
//     return (
//         <button id={val.id} onClick={val.bgcol}>{val.content}</button>
//     );
// }

const contact = () => {
    let home = document.getElementById('home');
    let cont = document.getElementById('contact');
    let abt = document.getElementById('about')
    home.style.backgroundColor = 'transparent';
    cont.style.backgroundColor = '#9088e6';
    abt.style.backgroundColor = 'transparent'
}
const home = () => {
    let home = document.getElementById('home');
    let cont = document.getElementById('contact');
    let abt = document.getElementById('about')
    cont.style.backgroundColor = 'transparent';
    home.style.backgroundColor = '#9088e6';
    abt.style.backgroundColor = 'transparent'
}

const about = () => {
    let home = document.getElementById('home');
    let cont = document.getElementById('contact');
    let abt = document.getElementById('about')
    cont.style.backgroundColor = 'transparent';
    abt.style.backgroundColor = '#9088e6';
    home.style.backgroundColor = 'transparent'
}

const refresh = () => {
    score = 0;
}
const showNav = () => {
    let short_ul = document.getElementById('short_ul');
    short_ul.style.display = 'flex';
    let short_nav_btn = document.getElementById('short_nav_btn');
    short_nav_btn.style.display = 'none';
    let short_nav_cross = document.getElementById('short_nav_cross');
    short_nav_cross.style.display = 'block';
}
const hideNav = () => {
    let short_ul = document.getElementById('short_ul');
    short_ul.style.display = 'none';
    let short_nav_btn = document.getElementById('short_nav_btn');
    short_nav_btn.style.display = 'block';
    let short_nav_cross = document.getElementById('short_nav_cross');
    short_nav_cross.style.display = 'none';
}

const hide_div = () => {
    let short_ul = document.getElementById('short_ul');
    short_ul.style.display = 'none';
    let short_nav_btn = document.getElementById('short_nav_btn');
    short_nav_btn.style.display = 'block';
    let short_nav_cross = document.getElementById('short_nav_cross');
    short_nav_cross.style.display = 'none';
}

const Nav = () => {
    return (
        <nav id='nav'>
            <NavLink id='logo' to="/" onClick={refresh}>Quiz-Buzz</NavLink>
            <ul id='nav_btn_div'>
                <li id='home'>
                    <NavLink className='navlink' to="/" onClick={home}>Home</NavLink>
                </li>
                <li id='contact'>
                    <NavLink className='navlink' to="/Contact" onClick={contact}>Contact</NavLink>
                </li>
                <li id='about'>
                    <NavLink className='navlink' to="/About" onClick={about}>About</NavLink>
                </li>
            </ul>
            <div id='short_ul'>
                <ul id='short_navlink'>
                    <li>
                        <NavLink to='/' className='nav_short' onClick={hide_div}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Contact' className='nav_short' onClick={hide_div}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to='/About' className='nav_short' onClick={hide_div}>About</NavLink>
                    </li>
                </ul>
                <ul id='social_link'>
                    <li>
                        <a href='https://www.facebook.com/sayandip.adhikary.96' onClick={hide_div}><BsFacebook /></a>
                        <p>Facebook</p>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/sayan.dip7/' onClick={hide_div}><BsInstagram /></a>
                        <p>Instagram</p>
                    </li>
                    <li>
                        <a href='https://github.com/Sayandip0408' onClick={hide_div}><BsGithub /></a>
                        <p>GitHub</p>
                    </li>
                </ul>
            </div>

            <ImMenu id="short_nav_btn" onClick={showNav} />
            <ImCross id="short_nav_cross" onClick={hideNav} />

        </nav>
    );
}

export default Nav;