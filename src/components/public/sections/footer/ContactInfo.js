import React from 'react';

import Logo from './../../sections/header/Logo';

const ContactInfo = () => {
    return (
        <div className="contact-address-block wow fadeInUp">
            <div className="footer-logo">
                <Logo />
            </div>
            <ul>
                <li>
                    <i className="fa fa-phone"></i> 9843779778
                </li>
                <li>
                    <i className="fa fa-envelope"></i> binodd680@gmail.com
                </li>
                <li>
                    <i className="fa fa-map-marker"></i> Hattiban, Lalitpur, Nepal
                </li>
            </ul>
        </div>
    );
}

export default ContactInfo;