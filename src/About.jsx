import React from 'react';
import { BsLink45Deg, BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs';
import js from '../src/images/js.png';
import html from '../src/images/html.png';
import react from '../src/images/React.png';
import css from '../src/images/css.png';



const About = () => {
    return (
        <section id='about_page'>
            <h1 data-aos="zoom-in" data-aos-duration="1000">About the Website & Developer</h1>
            <section id='about_div' data-aos="zoom-in" data-aos-duration="1000">
                <p>Hey there, you are welcome to <code>Quiz-Buzz</code>, my name is <code>SayanDip Adhikary</code></p>
                <p>This is a quiz website developed & maintained by me. Currently it has 8 subjects. You can choose any subject to participate.</p>
                <p>To know more about me, please visit my Portfolio: <a href='https://sayandip2.netlify.app/'>here <BsLink45Deg /></a></p>
                <p>Other Social media platform: <a href='https://www.facebook.com/sayandip.adhikary.96' className='p_a'><BsFacebook /></a> <a href='https://github.com/Sayandip0408' className='p_a'><BsGithub /></a> <a href='https://www.instagram.com/sayan.dip7/' className='p_a'><BsInstagram /></a></p>
                <p>This project has developed using: </p>
                <div id='pro_used'>
                    <img src={html} alt='html' />
                    <img src={css} alt='css' />
                    <img src={js} alt='js' />
                    <img src={react} alt='reactjs' />
                </div>
            </section>
        </section>
    );
}

export default About;