import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import Rodal from 'rodal';

import 'rodal/lib/rodal.css';

import { QuickViewContext } from './../../contextAPI/QuickViewContext';
import { CartItemContext } from '../../contextAPI/CartItemContext';
import { WishlistContext } from './../../contextAPI/WishlistContext';

const QuickView = () => {

    const quickViewItem = useContext(QuickViewContext)[0];
    const inVisibleItem = useContext(QuickViewContext)[2];
    const setInVisibleItem = useContext(QuickViewContext)[3];
    const cartItems = useContext(CartItemContext)[0];
    const setCartItems = useContext(CartItemContext)[1];
    const [wishlistItems, setWishlistItems] = useContext(WishlistContext);

    const [cartItem, setCartItem] = useState(0);
    const [currentWishlist, setCurrentWishlist] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        let currentItem = cartItems.filter(e => e.id === quickViewItem.id);
        if (!currentItem.length) {
            setCartItem(0);
        } else {
            setCartItem(currentItem[0].quanty);
        }

        let currentWishlist = wishlistItems.filter(e => e.id === quickViewItem.id);
        if (!currentWishlist.length) {
            setCurrentWishlist(true);
        } else {
            setCurrentWishlist(false);
        }
    }, [cartItems, wishlistItems, quickViewItem.id]);

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

    const handleCloseModalBox = () => {
        setInVisibleItem(false)
    }

    const colorLists = [
        { id: 1, color: '#1abc9c' },
        { id: 2, color: '#2ecc71' },
        { id: 3, color: '#3498db' },
        { id: 4, color: '#9b59b6' },
        { id: 5, color: '#bdc3c7' }
    ];

    let displayColor = colorLists.map((item, index) => {
        return (
            <li key={index}>
                <span onClick={() => setSelectedIndex(index)} style={{ backgroundColor: item.color }}>
                    {index === selectedIndex ? <i className="fa fa-check"></i> : ''}
                </span>
            </li>
        );
    });

    let reactMagnifyImage = quickViewItem
        ? quickViewItem.beforeImage
            ? <ReactImageMagnify {...{
                smallImage: {
                    alt: quickViewItem.title,
                    isFluidWidth: true,
                    src: quickViewItem.beforeImage
                },
                largeImage: {
                    src: quickViewItem.beforeImage,
                    width: 1400,
                    height: 1800
                }
            }} />
            : ''
        : '';

    return (
        <div className="quick-view-modal">
            <Rodal
                visible={inVisibleItem}
                onClose={() => setInVisibleItem(false)}
                enterAnimation="slideDown"
                leaveAnimation="slideUp"
            >
                <div className="row">
                    <div className="col-sm-5">
                        <div className="quick-view-product-image">
                            {reactMagnifyImage}
                        </div>
                    </div>
                    <div className="col-sm-7">
                        <div className="quick-view-product-details">

                            <h2>{quickViewItem.title}</h2>
                            <h4 className="price">Rs. {quickViewItem.price} /-</h4>
                            <p>{quickViewItem.decription}</p>

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
                                        ? <div className="add-to-cart-button">
                                            <span className="btn btn-success" onClick={() => handleAddToCard(quickViewItem)}>Add To Cart</span>
                                        </div>
                                        : ''
                                }
                                {
                                    cartItem > 0
                                        ? <>
                                            <div className="after-add-to-cart-button">
                                                <span className="btn btn-success" onClick={() => handleRemoveFromCard(quickViewItem)}>
                                                    <i className="fa fa-minus"></i>
                                                </span>
                                                <span className="cart-item">{cartItem}</span>
                                                {
                                                    cartItem < 10
                                                        ? <span className="btn btn-success" onClick={() => handleAddToCard(quickViewItem)}>
                                                            <i className="fa fa-plus"></i>
                                                        </span>
                                                        : <span className="btn btn-danger">
                                                            <i className="fa fa-ban"></i>
                                                        </span>
                                                }
                                            </div>
                                            <Link to="/cart" className="btn btn-primary view-cart" onClick={handleCloseModalBox}>View Cart</Link>
                                        </>
                                        : ''
                                }

                                <div className="add-to-whishlist-button">

                                    {
                                        currentWishlist
                                            ? <span className="btn btn-info" onClick={() => handleAddToWishlist(quickViewItem)}>Add To Whishlist</span>
                                            : <>
                                                <span className="btn btn-danger" onClick={() => handleRemoveToWishlist(quickViewItem)}>
                                                    <i className="fa fa-trash"></i> Remove from Wishlist
                                                    </span>
                                                <Link to="/whishlist" className="btn btn-primary" onClick={handleCloseModalBox}>
                                                    <i className="fa fa-eye"></i> View Wishlist
                                                </Link>
                                            </>
                                    }
                                </div>
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
            </Rodal>
        </div>
    );
}

export default QuickView;