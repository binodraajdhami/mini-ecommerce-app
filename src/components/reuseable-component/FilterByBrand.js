import React from 'react';

const FilterByBrand = () => {
    return (
        <div className="filter-content-by-brand">
            <h4>Filter by Brand</h4>
            <div className="radio">
                <label>
                    <input type="radio" name="filterByBrand" />Apple
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="filterByBrand" />Samsung
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="filterByBrand" />LG
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="filterByBrand" />Nokia
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="filterByBrand" />Sony
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="filterByBrand" />Oppo
                </label>
            </div>
        </div>
    );
}

export default FilterByBrand;