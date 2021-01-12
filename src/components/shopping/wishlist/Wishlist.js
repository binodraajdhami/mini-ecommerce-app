import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { WishlistContext } from './../../../contextAPI/WishlistContext';
import { CartItemContext } from './../../../contextAPI/CartItemContext';

const WishlistPage = () => {

    const [cartItems, setCartItems] = useContext(CartItemContext);
    const setIsVisibleSideCartItem = useContext(CartItemContext)[3];
    const [wishlistItems, setWishlistItems] = useContext(WishlistContext);

    const handleAddToCart = (item, index) => {
        item.quanty = 1;
        let newCartItem = cartItems.filter(e => e.id !== item.id);
        setCartItems([...newCartItem, item]);
        setIsVisibleSideCartItem(true);
        handleRemoveItemWishlist(item.id, index);
    }

    const handleRemoveItemWishlist = (id, index) => {
        let newWishlistIItems = wishlistItems;
        newWishlistIItems.splice(index, 1);
        setWishlistItems(() => [...newWishlistIItems]);
    }

    let items = wishlistItems.length > 0
        ? wishlistItems.map((item, i) => {
            let productUrl = `/product/${item.id}`;
            return (
                <tr key={i}>
                    <td>
                        <span className="wishlist-serial-number">
                            {i + 1}.
                        </span>
                    </td>
                    <td className="wishlist-product-image-td">
                        <span className="wishlist-product-image">
                            <img src={item.beforeImage} alt={item.title} />
                        </span>
                    </td>
                    <td>
                        <span className="wishlist-product-title">
                            <Link to={productUrl}>
                                {item.title}
                            </Link>
                        </span>
                    </td>
                    <td>
                        <span className="wishlist-product-price">
                            Rs. {item.price} /-
                        </span>
                    </td>
                    <td>
                        <span className="wishlist-product-add-to-cart">
                            <button className="btn btn-success" onClick={() => handleAddToCart(item, i)}>
                                <i className="fa fa-plus"></i> Add To Card
                        </button>
                        </span>
                    </td>
                    <td className="wishlist-product-remove-td">
                        <span className="wishlist-product-remove">
                            <button className="btn btn-danger" onClick={() => handleRemoveItemWishlist(item.id, i)}>
                                <i className="fa fa-trash"></i> Remove
                        </button>
                        </span>
                    </td>
                </tr>
            );
        })
        : '';

    return (
        <>
            <div className="content-banner">
                <div className="container">
                    <div className="content-banner-content">
                        <h4>
                            <Link to="/">Home</Link>
                            <i className="fa fa-angle-double-right"></i>
                            Wishlist
                        </h4>
                        <ul>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                        </ul>
                        <h3>Shopping Wishlist</h3>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container">
                    <div className="shopping-wishlist">
                        <h2>Shopping Wishlist</h2>
                        {
                            wishlistItems.length > 0
                                ? <>
                                    <table className="table table-condensed table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Image</th>
                                                <th>Title</th>
                                                <th>Price</th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {items}
                                        </tbody>
                                    </table>
                                </>
                                : <p>You have no any product in wishlist.</p>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default WishlistPage;