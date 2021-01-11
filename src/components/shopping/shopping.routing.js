import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Header from './../public/sections/header/Header';
import Footer from './../public/sections/footer/Footer';
import PageNotFound from './../public/pages/pagenotfound/PageNotFound';

import CartPage from './cart/Cart';
import CheckoutPage from './checkout/Checkout';
import WishlistPage from './wishlist/Wishlist';
import ThanksOrderPage from './thanks-order/ThanksOrder';

const ShoppingRouting = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/shopping/cart" component={CartPage} />
                <Route exact path="/shopping/checkout" component={CheckoutPage} />
                <Route exact path="/shopping/wishlist" component={WishlistPage} />
                <Route exact path="/shopping/thanks-order" component={ThanksOrderPage} />
                <Redirect path="/" to="/home" />
                <Route component={PageNotFound} />
            </Switch>
            <Footer />
        </>
    );
}

export default ShoppingRouting;