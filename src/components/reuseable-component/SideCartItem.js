import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

import { CartItemContext } from './../../contextAPI/CartItemContext';
import CartItemList from './CartItemList';
import TotalCartItem from './TotalCartItem';

const SideCartItem = () => {

    const isVisibleSideCartItem = useContext(CartItemContext)[2];
    const setIsVisibleSideCartItem = useContext(CartItemContext)[3];

    const handleModalVisible = () => {
        setIsVisibleSideCartItem(true);
    }

    const handleModalInVisible = () => {
        setIsVisibleSideCartItem(false);
    }

    return (
        <div className="side-cart-item">
            <div className="side-cart-item-button" onClick={handleModalVisible}>
                <i className="fa fa-shopping-basket"></i>
                <span className="item-count">
                    <TotalCartItem />
                </span>
            </div>

            <Rodal
                visible={isVisibleSideCartItem}
                onClose={() => setIsVisibleSideCartItem(false)}
                enterAnimation="slideRight"
                leaveAnimation="slideRight"
            >
                <div className="side-cart-item-heading">My Cart Items (<TotalCartItem />)</div>
                <CartItemList />
                <div className="side-cart-item-checkout">
                    <h4>Total Price: Rs.</h4>
                    <Link to="/checkout" onClick={handleModalInVisible}>Checkout Now</Link>
                </div>
            </Rodal>
        </div>
    );
}

export default SideCartItem;