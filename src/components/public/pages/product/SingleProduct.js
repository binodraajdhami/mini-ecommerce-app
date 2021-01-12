import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';

import { CartItemContext } from './../../../../contextAPI/CartItemContext';
import { WishlistContext } from './../../../../contextAPI/WishlistContext';
import { ImageGalleryContext } from './../../../../contextAPI/ImageGalleryContext';

import ProductImageSlider from '../../../reuseable-component/ProductImageSlider';
import SpecificationProduct from './ProductSpecification';
import RelatedProduct from './RelatedProduct';

const SingleProduct = () => {

    const currentProduct = {
        id: 1,
        title: 'City Backpack Black',
        price: '250',
        decription: 'Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.',
        beforeImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image1.jpg',
        afterImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image2.jpg',
    };

    const [cartItems, setCartItems] = useContext(CartItemContext);
    const [wishlistItems, setWishlistItems] = useContext(WishlistContext);
    const [imageGallery, setImageGallery] = useContext(ImageGalleryContext);

    const [cartItem, setCartItem] = useState(0);
    const [currentWishlist, setCurrentWishlist] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        setImageGallery(currentProduct.beforeImage);

        let currentItem = cartItems.filter(e => e.id === currentProduct.id);
        if (!currentItem.length) {
            setCartItem(0);
        } else {
            setCartItem(currentItem[0].quanty);
        }

        let currentWishlist = wishlistItems.filter(e => e.id === currentProduct.id);
        if (!currentWishlist.length) {
            setCurrentWishlist(true);
        } else {
            setCurrentWishlist(false);
        }
    }, [
        cartItems,
        wishlistItems,
        setImageGallery,
        currentProduct.id,
        currentProduct.beforeImage
    ]);

    const handleAddToWishlist = (item) => {
        setWishlistItems(prevWishlistItemsItem => [...prevWishlistItemsItem, item]);
        setCurrentWishlist(false);
    }

    const handleRemoveToWishlist = (item) => {
        let latestWishlistItem = wishlistItems.filter(e => e.id !== item.id);
        setWishlistItems([...latestWishlistItem]);
        setCurrentWishlist(true);
    }

    const handleAddToCard = (item) => {
        setCartItem(cartItem + 1);

        let exitedItem = cartItems.filter(e => e.id === item.id);
        if (!exitedItem.length) {
            item.quanty = 1;
            let newCartItem = cartItems.filter(e => e.id !== item.id);
            setCartItems([...newCartItem, item]);
        } else {
            cartItems.map(e => e.id === item.id ? e.quanty = (e.quanty + 1) : e.quanty);
            setCartItems(() => [...cartItems]);
        }

        handleRemoveToWishlist(item);
    }

    const handleRemoveFromCard = (item) => {
        setCartItem(cartItem - 1);

        let exitedItem = cartItems.filter(e => e.id === item.id);
        if (exitedItem.length) {
            cartItems.map((e, i) => e.id === item.id
                ? e.quanty > 1
                    ? e.quanty = (e.quanty - 1)
                    : cartItems.splice(i, 1)
                : e.quanty
            );
            setCartItems(() => [...cartItems]);
        }
    }

    const colorLists = [
        { id: 1, color: '#1abc9c' },
        { id: 2, color: '#2ecc71' },
        { id: 3, color: '#3498db' },
        { id: 4, color: '#9b59b6' },
        { id: 5, color: '#bdc3c7' }
    ]

    let displayColor = colorLists.map((item, index) => {
        return (
            <li key={index}>
                <span onClick={() => setSelectedIndex(index)} style={{ backgroundColor: item.color }}>
                    {index === selectedIndex ? <i className="fa fa-check"></i> : ''}
                </span>
            </li>
        );
    });

    return (
        <>
            <div className="content-banner">
                <div className="container">
                    <div className="content-banner-content">
                        <h4>
                            <Link to="/">Product</Link>
                            <i className="fa fa-angle-double-right"></i>
                            Pieces High Neck Knitted Sweater
                        </h4>
                        <ul>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                        </ul>
                        <h3>Pieces High Neck Knitted Sweater</h3>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container">
                    <div className="product-details">
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="product-image-gallery">
                                    <ReactImageMagnify {...{
                                        smallImage: {
                                            alt: 'Wristwatch by Ted Baker London',
                                            isFluidWidth: true,
                                            src: imageGallery
                                        },
                                        largeImage: {
                                            src: imageGallery,
                                            width: 1400,
                                            height: 1800
                                        }
                                    }} />
                                    <ProductImageSlider />
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <div className="product-short-description">
                                    <h2>Pieces High Neck Knitted Sweater</h2>
                                    <h4 className="price">Rs. 1500 /-</h4>
                                    <p>Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.</p>

                                    <div className="select-product-color">
                                        <h4>Colors: </h4>
                                        <ul>
                                            {displayColor}
                                        </ul>
                                    </div>
                                    <div className="add-to-cart-button-block">
                                        <p>Only 10 item in stock</p>
                                        {
                                            cartItem <= 0
                                                ? <div className="add-to-cart-button" title="Add To Cart">
                                                    <span className="btn btn-success" onClick={() => handleAddToCard(currentProduct)}>Add To Cart</span>
                                                </div>
                                                : ''
                                        }
                                        {
                                            cartItem > 0
                                                ? <>
                                                    <div className="after-add-to-cart-button">
                                                        <span className="btn btn-success" onClick={() => handleRemoveFromCard(currentProduct)}>
                                                            <i className="fa fa-minus"></i>
                                                        </span>
                                                        <span className="cart-item">{cartItem}</span>
                                                        {
                                                            cartItem < 10
                                                                ? <span className="btn btn-success" onClick={() => handleAddToCard(currentProduct)}>
                                                                    <i className="fa fa-plus"></i>
                                                                </span>
                                                                : <span className="btn btn-danger">
                                                                    <i className="fa fa-ban"></i>
                                                                </span>
                                                        }
                                                    </div>
                                                    <Link to="/cart" title="View Cart" className="btn btn-primary view-cart">View Cart</Link>
                                                </>
                                                : ''
                                        }

                                        {
                                            cartItem === 0
                                                ? <div className="add-to-whishlist-button">

                                                    {
                                                        currentWishlist
                                                            ? <span className="btn btn-info" title="Add to Wishlist" onClick={() => handleAddToWishlist(currentProduct)}>Add To Whishlist</span>
                                                            : <>
                                                                <Link to="/shopping/wishlist" title="View Wishlist" className="btn btn-primary">
                                                                    <i className="fa fa-eye"></i> View Wishlist
                                                        </Link>
                                                                <span className="btn btn-danger" title="Remove from Wishlist" onClick={() => handleRemoveToWishlist(currentProduct)}>
                                                                    <i className="fa fa-trash"></i>
                                                                </span>
                                                            </>
                                                    }
                                                </div>
                                                : ''
                                        }

                                    </div>
                                    <div className="product-category-info">
                                        <h4>Category</h4>
                                        <ul>
                                            <li>Womens</li>
                                            <li>Womens Bags</li>
                                        </ul>
                                    </div>
                                    <div className="product-tags-info">
                                        <h4>Tags</h4>
                                        <ul>
                                            <li>Womens</li>
                                            <li>Bags</li>
                                            <li>Accessories</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SpecificationProduct />
                    <RelatedProduct />
                </div>
            </div>
        </>
    );
}

export default SingleProduct;