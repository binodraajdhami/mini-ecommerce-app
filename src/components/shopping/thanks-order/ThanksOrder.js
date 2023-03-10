import React from 'react';
import { Link } from 'react-router-dom';

const ThanksOrderPage = () => {
    return (
        <>
            <div className="content-banner">
                <div className="container">
                    <div className="content-banner-content">
                        <h4>
                            <Link to="/">Home</Link>
                            <i className="fa fa-angle-double-right"></i>
                            Shopping Order
                        </h4>
                        <ul>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                        </ul>
                        <h3>Shopping Order</h3>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container">
                    <h2>Shopping Order</h2>
                    <p>Under development...</p>
                </div>
            </div>
        </>
    );
}

export default ThanksOrderPage;