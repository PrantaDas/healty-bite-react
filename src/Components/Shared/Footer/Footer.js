import React from 'react';

const Footer = () => {

    let date = new Date().getFullYear();
    return (
        <footer className='mt-5'>
            <p>All Rights <span>&copy;</span> {date} Reserved By Healthy Bite.</p>
        </footer>
    );
};

export default Footer;