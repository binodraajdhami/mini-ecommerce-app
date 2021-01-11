import React from 'react';

const FilterByCategory = () => {
    return (
        <div className="filter-content-by-category">
            <h4>Filter by Category</h4>
            <div className="radio">
                <label>
                    <input type="radio" name="filterByCategory" />Accessories
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="filterByCategory" />Electronics
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="filterByCategory" />Female Fashion
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="filterByCategory" />Male Fashion
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="filterByCategory" />Healty & Lifestyles
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="filterByCategory" />Games & Sports
                </label>
            </div>
        </div>
    );
}

export default FilterByCategory;