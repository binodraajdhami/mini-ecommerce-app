import React from 'react';

import GotoTop from './GotoTop'

const CopyRight = () => {
    return (
        <div className="footer">
            <GotoTop />
            <div className="container">
                <div className="copyright wow zoomIn">
                    <p>Copyright © {new Date().getFullYear()} - Mini Ecommerce React App. All Rights Reserved. Developed by: Binod RD</p>
                </div>
            </div>
        </div>
    );
}

export default CopyRight;