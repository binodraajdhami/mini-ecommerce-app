import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartItemContext } from './../../../contextAPI/CartItemContext';
import TotalCartItem from './../../reuseable-component/TotalCartItem';
import TotalPrice from './../../reuseable-component/TotalPrice';

const CartPage = () => {

    const cartItems = useContext(CartItemContext)[0];
    const setCartItems = useContext(CartItemContext)[1];

    const handleAddToCart = (item) => {
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

    const handleSubtractCart = (item, i) => {
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

    const handleRemoveItemFromCart = (id, index) => {
        let newCartItems = cartItems;
        newCartItems.splice(index, 1)
        setCartItems(() => [...newCartItems]);
    }

    let carts = cartItems.length
        ? cartItems.map((item, i) => {
            let prouctUrl = `/product/${item.id}`;
            return (
                <tr key={i}>
                    <td>
                        <span className="cart-serial-number">
                            {i + 1}.
                        </span>
                    </td>
                    <td className="cart-product-image-td">
                        <span className="cart-product-image">
                            <img src={item.beforeImage} alt={item.title} />
                        </span>
                    </td>
                    <td>
                        <span className="cart-product-title">
                            <Link to={prouctUrl}>
                                {item.title}
                            </Link>
                        </span>
                    </td>
                    <td>
                        <span className="cart-product-quantity">
                            <button disabled={item.quanty > 1 ? false : true} className="btn btn-danger" onClick={() => handleSubtractCart(item, i)}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <button className="btn btn-default">
                                {item.quanty}
                            </button>
                            <button className="btn btn-success" onClick={() => handleAddToCart(item)}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </span>
                    </td>
                    <td>
                        <span className="cart-product-price">
                            Rs. {item.price * item.quanty} /- <i className="badge">{item.price} X {item.quanty}</i>
                        </span>
                    </td>
                    <td className="cart-product-remove-td">
                        <span className="cart-product-remove">
                            <button className="btn btn-danger" onClick={() => handleRemoveItemFromCart(item.id, i)}>
                                <i className="fa fa-trash"></i> Remove
                        </button>
                        </span>
                    </td>
                </tr>
            );
        })
        : ''

    return (
        <>
            <div className="content-banner">
                <div className="container">
                    <div className="content-banner-content">
                        <h4>
                            <Link to="/">Home</Link>
                            <i className="fa fa-angle-double-right"></i>
                            Shopping Cart
                        </h4>
                        <ul>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                        </ul>
                        <h3>Shopping Cart</h3>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container">
                    <div className="shopping-cart">
                        <h2>Shopping Cart Items</h2>
                        {
                            cartItems.length > 0
                                ? <>
                                    <table className="table table-condensed table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Quantity</th>
                                                <th>Price ( Rate * Quantity )</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {carts}
                                        </tbody>
                                    </table>
                                    <div className="shopping-cart-total">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <table className="table table-bordered table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th>Quantity</th>
                                                            <th>Discount</th>
                                                            <th>Total Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><TotalCartItem /></td>
                                                            <td>---</td>
                                                            <td>Rs. <TotalPrice /> /-</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="3">
                                                                <Link to="/shopping/checkout" className="btn btn-lg btn-primary">Checkout Now</Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                : <p>You have no any product in cart item.</p>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartPage;