import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, productUrl, cbFunction }) => {

    return (
        <div className="product-content-item">
            <div className="product-thumbnail" style={{ background: `URL( ${product.beforeImage} )`, backgroundSize: 'cover' }}>
                <img src={product.afterImage} alt="before_image" />
                <div className="hover-layer">
                    <ul>
                        <li>
                            <span className="button" onClick={() => cbFunction(product)}>
                                <span>Quick View</span>
                                <i className="fa fa-eye"></i>
                            </span>
                        </li>
                        <li>
                            <span className="button">
                                <span>Add To Cart</span>
                                <i className="fa fa-shopping-cart"></i>
                            </span>
                        </li>
                    </ul>
                </div>
                <span className="whishlist">
                    <span>
                        <i className="fa fa-heart"></i>
                    </span>
                </span>
                <span className="discount-offer">
                    25% Off
                        </span>
            </div>
            <div className="product-details">
                <h4><Link to={productUrl}>{product.title}</Link></h4>
                <p>Rs. {product.price} /-</p>
            </div>
        </div>
    );
}

export default ProductCard;