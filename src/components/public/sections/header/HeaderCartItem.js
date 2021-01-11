import React from 'react';

import TotalCartItem from '../../../reuseable-component/TotalCartItem';
import TotalPrice from './../../../reuseable-component/TotalPrice';

const HeaderCartItem = () => {
    return (
        <div className="header-cart-item">
            <span>
                <i className="fa fa-cart-plus"></i>  <TotalCartItem /> Items
            </span>
            <span> | </span>
            <span>
                Rs. <TotalPrice /> /-
            </span>
        </div>
    );
}

export default HeaderCartItem;