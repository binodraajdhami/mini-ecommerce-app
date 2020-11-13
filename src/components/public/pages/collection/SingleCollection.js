import React from 'react';
import { Link } from 'react-router-dom';

const SingleCollection = () => {
    return (
        <>
            <div className="content-banner">
                <div className="container">
                    <div className="content-banner-content">
                        <h4>
                            <Link to="/collection">Collection</Link>
                            <i className="fa fa-angle-double-right"></i>
                            Single Collection
                        </h4>
                        <ul>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                        </ul>
                        <h3>Single Collection</h3>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container">
                    <h2>Single Collection</h2>
                </div>
            </div>
        </>
    );
}

export default SingleCollection;