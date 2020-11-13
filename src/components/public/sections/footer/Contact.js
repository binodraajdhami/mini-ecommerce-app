import React from 'react';

import ContactInfo from './ContactInfo';
import CategoryMenu from './CategoryMenu';
import InformationMenu from './InformationMenu';
import UsefullLinks from './UsefullLinks';

const ContactSection = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <ContactInfo />
                    </div>
                    <div className="col-sm-8">
                        <div className="row">
                            <div className="col-sm-4">
                                <CategoryMenu />
                            </div>
                            <div className="col-sm-4">
                                <InformationMenu />
                            </div>
                            <div className="col-sm-4">
                                <UsefullLinks />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;