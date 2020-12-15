import React, { createContext, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = (props) => {

    const [wishlistItems, setWishlistItems] = useState([]);

    return (
        <WishlistContext.Provider value={[wishlistItems, setWishlistItems]}>
            {props.children}
        </WishlistContext.Provider>
    );
}