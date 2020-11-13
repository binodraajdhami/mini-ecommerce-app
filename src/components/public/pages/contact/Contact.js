import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <>
            <div className="content-banner">
                <div className="container">
                    <div className="content-banner-content">
                        <h4>
                            <Link to="/">Home</Link>
                            <i className="fa fa-angle-double-right"></i>
                            Contact Us
                        </h4>
                        <ul>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                        </ul>
                        <h3>Contact Us</h3>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>This is Contact Us page content.</p>
                </div>
            </div>
        </>
    );
}

export default Contact;