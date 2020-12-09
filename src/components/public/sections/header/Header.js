import React from 'react';

import HeaderContact from './HeaderContact';
import HeadeLoginRegister from './HeadeLoginRegister';
import SocialMedia from './SocialMedia';
import Logo from './Logo';
import NavMenu from './NavMenu';
import HeaderSearchForm from './HeaderSearchForm';
import CartItem from './CartItem';

const Header = () => {
    return (
        <header>
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <HeaderContact />
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <SocialMedia />
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <HeadeLoginRegister />
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
                        <div className="col-md-4">
                            <NavMenu />
                        </div>
                        <div className="col-md-4">
                            <HeaderSearchForm />
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