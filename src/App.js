import React from 'react';
import AppRouting from './app.routing';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CartItemProvider } from './contextAPI/CartItemContext';
import { QuickViewContextProvider } from './contextAPI/QuickViewContext'

const App = () => {
    return (
        <CartItemProvider>
            <QuickViewContextProvider>
                <AppRouting />
            </QuickViewContextProvider>
        </CartItemProvider>
    );
}

export default App;