import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
    return (
        <>
            <div className="content-banner">
                <div className="container">
                    <div className="content-banner-content">
                        <h4>
                            <Link to="/">Home</Link>
                            <i className="fa fa-angle-double-right"></i>
                            Blog
                        </h4>
                        <ul>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                        </ul>
                        <h3>All Blogs</h3>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container">
                    <h2>All Blogs</h2>
                </div>
            </div>
        </>
    );
}

export default BlogPage;