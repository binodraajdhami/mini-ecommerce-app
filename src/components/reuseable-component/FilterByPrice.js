import React from 'react';

const FilterByPricePrice = () => {
    return (
        <div className="filter-content-by-price">
            <h4>Filter by Price</h4>
            <div className="radio">
                <label>
                    <input type="radio" name="filterByPrice" />Accessories
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="filterByPrice" />Electronics
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="filterByPrice" />Females
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="filterByPrice" />Males
                </label>
            </div>
        </div>
    );
}

export default FilterByPricePrice;