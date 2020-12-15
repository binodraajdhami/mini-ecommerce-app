import React from 'react';
import AppRouting from './app.routing';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CartItemProvider } from './contextAPI/CartItemContext';
import { WishlistProvider } from './contextAPI/WishlistContext';
import { QuickViewContextProvider } from './contextAPI/QuickViewContext'
import { ImageGalleryProvider } from './contextAPI/ImageGalleryContext';

const App = () => {
    return (
        <CartItemProvider>
            <WishlistProvider>
                <QuickViewContextProvider>
                    <ImageGalleryProvider>
                        <AppRouting />
                    </ImageGalleryProvider>
                </QuickViewContextProvider>
            </WishlistProvider>
        </CartItemProvider>
    );
}

export default App;