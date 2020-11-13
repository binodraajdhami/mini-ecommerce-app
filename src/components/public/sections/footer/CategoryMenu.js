import React from 'react';
import { Link } from 'react-router-dom';

const CategoryMenu = () => {
    return (
        <div className="footer-menu-title wow fadeInUp">
            <h4>Categories</h4>
            <ul>
                <li>
                    <Link to="/product-category/men">Men</Link>
                </li>
                <li>
                    <Link to="/product-category/women">Women</Link>
                </li>
                <li>
                    <Link to="/product-category/accessories">Accessories</Link>
                </li>
                <li>
                    <Link to="/product-category/footwear">Footwear</Link>
                </li>
                <li>
                    <Link to="/product-category/watches">Watches</Link>
                </li>
            </ul>
        </div>
    );
}

export default CategoryMenu;