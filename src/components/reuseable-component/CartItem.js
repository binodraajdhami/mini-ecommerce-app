import React, { useContext } from 'react';

import { CartItemContext } from './../../contextAPI/CartItemContext';

const CartItem = ({ product, index }) => {

    const [cartItems, setCartItems] = useContext(CartItemContext);

    const handleRemoveItemFromCart = (id, index) => {
        let newCartItems = cartItems;
        newCartItems.splice(index, 1)
        setCartItems(() => [...newCartItems]);
    }

    return (
        <li className="side-cart-item-list">
            <div className="side-cart-item-image">
                <img src={product.beforeImage} alt={product.title} />
            </div>
            <div className="side-cart-item-title">
                <h4>{product.title}</h4>
                <span>Rs. {product.price * product.quanty} /-</span>
            </div>
            <div className="side-cart-item-quanty">
                <span>({product.quanty})</span>
            </div>
            <div className="side-cart-item-remove">
                <i className="fa fa-times" onClick={() => handleRemoveItemFromCart(product.id, index)}></i>
            </div>
        </li>
    );
}

export default CartItem;