import React from 'react';

import GotoTop from './GotoTop'

const CopyRight = () => {
    return (
        <div className="footer">
            <GotoTop />
            <div className="container">
                <div className="copyright wow zoomIn">
                    <p>Copyright © 2020 - React Ecommerce. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default CopyRight;