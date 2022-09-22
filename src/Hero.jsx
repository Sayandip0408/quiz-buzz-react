import React from 'react';
import student from './student.png';
const Hero = () => {
    return (
        <section id='hero'>
            <img id='student_img' src={student} alt='student' data-aos="zoom-in" data-aos-duration="1000" />
            <div id='hero_text' data-aos="zoom-in" data-aos-duration="1000">
                <h1>Unlocking the knowledge at the speed of thought.</h1>
                <h2>Be ready. Be smart. Be noticed!</h2>
                <p>A platform to increase your MCQ solving ability. Subject-wise MCQ sets.</p>
            </div>
        </section>
    );
}

export default Hero;