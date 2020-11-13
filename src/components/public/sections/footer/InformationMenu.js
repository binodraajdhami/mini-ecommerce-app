import React from 'react';
import { Link } from 'react-router-dom';

const InformationMenu = () => {
    return (
        <div className="footer-menu-title wow fadeInUp">
            <h4>Infomation</h4>
            <ul>
                <li>
                    <Link to="/about-us">About Us</Link>
                </li>
                <li>
                    <Link to="/contact-us">Contact Us</Link>
                </li>
                <li>
                    <Link to="/terms-conditions">Terms & Conditions</Link>
                </li>
                <li>
                    <Link to="/shipping-delivery">Shipping & Delivery</Link>
                </li>
                <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
            </ul>
        </div>
    );
}

export default InformationMenu;