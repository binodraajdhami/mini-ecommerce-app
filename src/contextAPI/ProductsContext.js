import React, { createContext, useState } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {

    const [products, setProducts] = useState([]);

    return (
        <ProductContext.Provider value={products, setProducts}>
            {props.children}
        </ProductContext.Provider>
    )
}