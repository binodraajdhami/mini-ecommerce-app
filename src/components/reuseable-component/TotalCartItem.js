import React, { useContext, useEffect, useState } from 'react';

import { CartItemContext } from './../../contextAPI/CartItemContext';

const TotalCartItem = () => {

    const [cartItems] = useContext(CartItemContext);
    const [itemQuantity, setItemQuantity] = useState(0);

    useEffect(() => {
        handleUpdateItems(cartItems);
    });

    const handleUpdateItems = (items) => {
        let collectQuantity = items.map(e => e.quanty);
        let total = 0;
        for (let i in collectQuantity) {
            total += collectQuantity[i];
        }
        setItemQuantity(total)
    }

    return (
        <>{itemQuantity}</>
    );
}

export default TotalCartItem;