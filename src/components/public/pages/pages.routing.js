import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './../sections/header/Header';
import Footer from './../sections/footer/Footer'
import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';
import CollectionPage from './collection/Collection';
import SingleCollection from './collection/SingleCollection';
import BlogPage from './blog/Blog';
import SingleBlog from './blog/SingleBlog';
import ProductPage from './product/Product';
import SingleProduct from './product/SingleProduct';
import CategoryPage from './category/Category';
import SingleCategory from './category/SingleCategory';
import PageNotFound from './pagenotfound/PageNotFound';

const PageRouting = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/about-us" component={About} />
                <Route exact path='/contact-us' component={Contact} />
                <Route exact path="/collection" component={CollectionPage} />
                <Route exact path="/collection/:id" component={SingleCollection} />
                <Route exact path='/blog' component={BlogPage} />
                <Route exact path='/blog/:id' component={SingleBlog} />
                <Route exact path='/product' component={ProductPage} />
                <Route exact path="/product/:id" component={SingleProduct} />
                <Route exact path="/product-category" component={CategoryPage} />
                <Route exact path="/product-category/:id" component={SingleCategory} />
                <Route component={PageNotFound} />
            </Switch>
            <Footer />
        </>
    );
}

export default PageRouting;