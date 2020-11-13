import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <>
            <div className="content-banner">
                <div className="container">
                    <div className="content-banner-content">
                        <h4>
                            <Link to="/">Home</Link>
                            <i className="fa fa-angle-double-right"></i>
                            404
                        </h4>
                        <ul>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                        </ul>
                        <h3>Page Not Found</h3>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container">
                    <h1>404</h1>
                    <p>Page Not Found</p>
                    <Link to="/">Back to Home</Link>
                </div>
            </div>
        </>
    );
}

export default PageNotFound;