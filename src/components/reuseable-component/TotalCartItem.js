import React, { useContext } from 'react';

import { CartItemContext } from './../../contextAPI/CartItemContext';

const TotalCartItem = () => {

    const [cartItems] = useContext(CartItemContext);

    return (
        <>
            {
                cartItems.length > 0 ? cartItems.length : 0
            }
        </>
    );
}

export default TotalCartItem;