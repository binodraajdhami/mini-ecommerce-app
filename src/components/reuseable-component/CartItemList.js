import React, { useContext } from 'react';

import { CartItemContext } from '../../contextAPI/CartItemContext';
import CartItem from './CartItem';

const CartItemList = () => {

    const [cartItems] = useContext(CartItemContext);

    return (
        <>
            {
                cartItems.length > 0
                    ? <ul className="side-cart-item-content">
                        {
                            cartItems.map((item, i) => {
                                return (
                                    <CartItem key={i} product={item} index={i} />
                                )
                            })
                        }
                    </ul>
                    : <p className="side-cart-item-no-content">You don't have any item in cart yet.</p>
            }
        </>
    );
}

export default CartItemList;