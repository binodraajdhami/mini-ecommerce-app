import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = () => {
    return (
        <>
            <div className="content-banner">
                <div className="container">
                    <div className="content-banner-content">
                        <h4>
                            <Link to="/product-category">Category</Link>
                            <i className="fa fa-angle-double-right"></i>
                            Single Category
                        </h4>
                        <ul>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                        </ul>
                        <h3>Single Category</h3>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container">
                    <h2>Single Category</h2>
                </div>
            </div>
        </>
    );
}

export default SingleCategory;