import React from 'react';
import './Footer.css'
const Footer = () => {

    let date = new Date().getFullYear();
    return (
        <footer className='footer-style ' >
            <p className='text-white'>All Rights <span>&copy;</span> {date} Reserved By Healthy Bite.</p>
        </footer>
    );
};

export default Footer;