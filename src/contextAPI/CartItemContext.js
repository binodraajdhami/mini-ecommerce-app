import React, { useState, createContext } from 'react';

export const CartItemContext = createContext();

export const CartItemProvider = (props) => {

    const [cartItems, setCartItems] = useState([]);
    const [isVisibleSideCartItem, setIsVisibleSideCartItem] = useState(false);

    return (
        <CartItemContext.Provider value={
            [
                cartItems,
                setCartItems,
                isVisibleSideCartItem,
                setIsVisibleSideCartItem
            ]
        }>
            {props.children}
        </CartItemContext.Provider>
    );
}