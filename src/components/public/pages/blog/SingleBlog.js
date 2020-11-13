import React from 'react';
import { Link } from 'react-router-dom';

const SingleBlog = () => {
    return (
        <>
            <div className="content-banner">
                <div className="container">
                    <div className="content-banner-content">
                        <h4>
                            <Link to="/blog">Blog</Link>
                            <i className="fa fa-angle-double-right"></i>
                            Single Blog
                        </h4>
                        <ul>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                        </ul>
                        <h3>Single Blog</h3>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container">
                    <h2>Single Blog</h2>
                </div>
            </div>
        </>
    );
}

export default SingleBlog;