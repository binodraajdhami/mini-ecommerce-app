import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';

const SpecificationProduct = () => {

    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    }

    return (
        <div className="product-specifications">
            <h4>Product Specifications</h4>

            <Tabs value={selectedTab} onChange={handleTabChange}>
                <Tab label="Specification" />
                <Tab label="Reviews" />
            </Tabs>

        </div>
    );
}

export default SpecificationProduct;