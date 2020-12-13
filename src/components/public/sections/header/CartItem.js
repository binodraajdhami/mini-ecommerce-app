import React from 'react';

import TotalCartItem from './../../../reuseable-component/TotalCartItem';

const CartItem = () => {
    return (
        <div className="cart-item">
            <span>
                <i className="fa fa-cart-plus"></i>  <TotalCartItem /> Items
                </span>
        </div>
    );
}

export default CartItem;