import React, { useState } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

const SideCartItem = () => {

    const [isvisible, setIsVisible] = useState(false);

    const handleModal = () => {
        setIsVisible(true);
    }

    return (
        <div className="side-cart-item">
            <div className="side-cart-item-button" onClick={handleModal}>
                <i className="fa fa-shopping-basket"></i>
                <span className="item-count">0</span>
            </div>

            <Rodal
                visible={isvisible}
                onClose={() => setIsVisible(false)}
                enterAnimation="slideRight"
                leaveAnimation="slideRight"
            >
                <h1>My Cart</h1>
                <p>You have no any item in cart.</p>
            </Rodal>
        </div>
    );
}

export default SideCartItem;