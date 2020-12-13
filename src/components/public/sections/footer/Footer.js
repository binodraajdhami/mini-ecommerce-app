import React from 'react';

import ContactSection from './Contact'
import CopyRight from './CopyRight';
import SideCartItem from '../../../reuseable-component/SideCartItem';
import QuickView from './../../../reuseable-component/QuickView';

const Footer = () => {
    return (
        <footer>
            <ContactSection />
            <CopyRight />
            <SideCartItem />
            <QuickView />
        </footer>
    );
}

export default Footer;