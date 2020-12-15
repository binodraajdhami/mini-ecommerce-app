import React from 'react';

import TotalCartItem from '../../../reuseable-component/TotalCartItem';

const HeaderCartItem = () => {
    return (
        <div className="header-cart-item">
            <span>
                <i className="fa fa-cart-plus"></i>  <TotalCartItem /> Items
                </span>
        </div>
    );
}

export default HeaderCartItem;