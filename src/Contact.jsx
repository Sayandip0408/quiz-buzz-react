import React, { useRef } from 'react';
import { FcContacts } from 'react-icons/fc';
import { AiOutlineSend } from 'react-icons/ai';
import { RiChatSmileFill } from 'react-icons/ri';
import emailjs from '@emailjs/browser';


const send_logo_far = () => {
    let send_logo = document.getElementById('send_logo');
    send_logo.style.marginLeft = '5%';
}
const send_logo_near = () => {
    let send_logo = document.getElementById('send_logo');
    send_logo.style.marginLeft = '0%';
}

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gg3azwj', 'template_c59k2wd', form.current, '3Ri14amHieEplBETa')
            .then((result) => {
                console.log(result.text);
                alert("Message sent.");
            }, (error) => {
                console.log(error.text);
                alert("Message not sent.");
            }
            );
        e.target.reset();
    };
    return (
        <section id='contact_sec'>
            <h1 data-aos="zoom-in" data-aos-duration="1000">Contact Us <FcContacts /></h1>
            <h2 data-aos="zoom-in" data-aos-duration="1000">Feel free to contact us. We are open for suggestions. <RiChatSmileFill /></h2>
            <form id="contact_form" ref={form} onSubmit={sendEmail} data-aos="fade-down" data-aos-duration="1000">
                <input type='text' id='inp_name' name='name' placeholder='Your Name' />
                <input type='email' id='inp_mail' name='email' placeholder='Email ID' />
                <input type='text' id='inp_phn' name='phone' placeholder='Phone Number' />
                <textarea id='inp_msg' name="message" placeholder='Enter your massage here...' rows='4' />
                <button type="submit" id="send_msg" onMouseOver={send_logo_far} onMouseOut={send_logo_near}>Send <AiOutlineSend id='send_logo' /></button>
            </form>
        </section>
    );
}

export default Contact;