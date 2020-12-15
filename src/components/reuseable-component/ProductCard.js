import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartItemContext } from './../../contextAPI/CartItemContext';
import { QuickViewContext } from './../../contextAPI/QuickViewContext';

const ProductCard = ({ product, productUrl }) => {

    const cartItems = useContext(CartItemContext)[0];
    const setCartItems = useContext(CartItemContext)[1];
    const setIsVisibleSideCartItem = useContext(CartItemContext)[3];
    const setQuickViewItem = useContext(QuickViewContext)[1];
    const setInVisibleItem = useContext(QuickViewContext)[3];

    const handleAddToCard = (item) => {

        let exitedItem = cartItems.filter(e => e.id === item.id);
        if (!exitedItem.length) {
            item.quanty = 1;
            let newCartItem = cartItems.filter(e => e.id !== item.id);
            setCartItems([...newCartItem, item]);
        } else {
            cartItems.map(e => e.id === item.id ? e.quanty = (e.quanty + 1) : e.quanty);
            setCartItems(() => [...cartItems]);
        }
        setIsVisibleSideCartItem(true);
    }

    const handleQuickView = (item) => {
        setQuickViewItem(item);
        setInVisibleItem(true);
    }

    return (
        <div className="product-content-item">
            <div className="product-thumbnail" style={{ background: `URL( ${product.beforeImage} )`, backgroundSize: 'cover' }}>
                <img src={product.afterImage} alt="before_image" />
                <div className="hover-layer">
                    <ul>
                        <li>
                            <div className="button button-ripple" onClick={() => handleQuickView(product)}>
                                <div className="move-to-top">Quick View</div>
                                <i className="fa fa-eye"></i>
                            </div>
                        </li>
                        <li>
                            <div className="button button-ripple" onClick={() => handleAddToCard(product)}>
                                <div className="move-to-top">Add To Cart</div>
                                <i className="fa fa-shopping-cart"></i>
                            </div>
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