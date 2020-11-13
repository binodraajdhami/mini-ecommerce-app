import React from 'react';
import { Link } from 'react-router-dom';

const UsefullLinks = () => {
    return (
        <div className="footer-menu-title wow fadeInUp">
            <h4>Useful links</h4>
            <ul>
                <li>
                    <Link to="/store-location">Store Location</Link>
                </li>
                <li>
                    <Link to="/my-account">My account</Link>
                </li>
                <li>
                    <Link to="/latest-news">Latest News</Link>
                </li>
                <li>
                    <Link to="/faqs">FAQs</Link>
                </li>
                <li>
                    <Link to="/returns-exchanges">Returns & Exchanges</Link>
                </li>
            </ul>
        </div>
    );
}

export default UsefullLinks;