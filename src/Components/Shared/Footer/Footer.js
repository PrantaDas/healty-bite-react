import React from 'react';

const Footer = () => {

    let date =  new Date().getFullYear();
    return (
        <div>
            <p>All Rights <span>&copy;</span> {date} Reserved By Healthy Bite.</p>
        </div>
    );
};

export default Footer;