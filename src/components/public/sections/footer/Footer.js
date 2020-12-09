import React from 'react';

import ContactSection from './Contact'
import CopyRight from './CopyRight';
import SideCartItem from '../../../reuseable-component/SideCartItem';

const Footer = () => {
    return (
        <footer>
            <ContactSection />
            <SideCartItem />
            <CopyRight />
        </footer>
    );
}

export default Footer;