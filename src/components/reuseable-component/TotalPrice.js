import React, { useContext, useEffect, useState } from 'react';

import { CartItemContext } from './../../contextAPI/CartItemContext';

const TotalPrice = () => {

    const [cartItems] = useContext(CartItemContext);
    const [itemPrice, setItemPrice] = useState(0);

    useEffect(() => {
        handleUpdatePrice(cartItems);
    });

    const handleUpdatePrice = (items) => {
        let collectPrice = items.map(e => e.price * e.quanty);
        let total = 0;
        for (let i in collectPrice) {
            total += collectPrice[i];
        }
        setItemPrice(total)
    }

    return (
        <>
            {
                itemPrice > 0 ? itemPrice : <span>00.00</span>
            }
        </>
    );
}

export default TotalPrice;