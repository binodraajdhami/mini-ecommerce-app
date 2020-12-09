import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import Rodal from 'rodal';

import 'rodal/lib/rodal.css';

const QuickView = ({ value, onclose, product }) => {

    const [cartItem, setCartItem] = useState(0);
    const [whishlist, setWhishlist] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

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

    let reactMagnifyImage = product.beforeImage
        ? <ReactImageMagnify {...{
            smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src: product.beforeImage
            },
            largeImage: {
                src: product.beforeImage,
                width: 1400,
                height: 1800
            }
        }} />
        : '';

    return (
        <div className="quick-view-modal">
            <Rodal
                visible={value}
                onClose={onclose}
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

                            <h2>{product.title}</h2>
                            <h4 className="price">Rs. {product.price} /-</h4>
                            <p>{product.decription}</p>

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
                                            <span className="btn btn-success" onClick={() => setCartItem(cartItem + 1)}>Add To Cart</span>
                                        </div>
                                        : ''
                                }
                                {
                                    cartItem > 0
                                        ? <>
                                            <div className="after-add-to-cart-button">
                                                <span className="btn btn-success" onClick={() => setCartItem(cartItem - 1)}>
                                                    <i className="fa fa-minus"></i>
                                                </span>
                                                <span className="cart-item">{cartItem}</span>
                                                {
                                                    cartItem < 10
                                                        ? <span className="btn btn-success" onClick={() => setCartItem(cartItem + 1)}>
                                                            <i className="fa fa-plus"></i>
                                                        </span>
                                                        : <span className="btn btn-danger">
                                                            <i className="fa fa-ban"></i>
                                                        </span>
                                                }
                                            </div>
                                            <Link to="/cart" className="btn btn-danger view-cart">View Cart</Link>
                                        </>
                                        : ''
                                }

                                <div className="add-to-whishlist-button">

                                    {
                                        whishlist
                                            ? <Link to="/whishlist" className="btn btn-primary">View Whishlist</Link>
                                            : <span className="btn btn-info" onClick={() => setWhishlist(true)}>Add To Whishlist</span>
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Rodal>
        </div>
    );
}

export default QuickView;