import React from 'react';

import HeaderContact from './HeaderContact';
import SocialMedia from './SocialMedia';
import Logo from './Logo';
import NavMenu from './NavMenu';
import CartItem from './CartItem';

const Header = () => {
    return (
        <header>
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <HeaderContact />
                        </div>
                        <div className="col-sm-3">
                            <SocialMedia />
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <Logo />
                        </div>
                        <div className="col-md-8">
                            <NavMenu />
                        </div>
                        <div className="col-md-2">
                            <CartItem />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;