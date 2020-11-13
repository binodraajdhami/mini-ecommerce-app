import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <div className="content-banner">
                <div className="container">
                    <div className="content-banner-content">
                        <h4>
                            <Link to="/">Home</Link>
                            <i className="fa fa-angle-double-right"></i>
                            About
                        </h4>
                        <ul>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                        </ul>
                        <h3>About</h3>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container">
                    <h1>About</h1>
                    <p>This is about page content.</p>
                </div>
            </div>
        </>
    );
}

export default About;