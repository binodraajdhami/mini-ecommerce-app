import React from 'react';

const FilterByTag = () => {
    return (
        <div className="filter-content-by-tag">
            <h4>Filter by Tag</h4>
            <div className="radio">
                <label>
                    <input type="radio" name="filterByTag" />Accessories
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="filterByTag" />Electronics
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="filterByTag" />Females
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="filterByTag" />Males
                </label>
            </div>
        </div>
    );
}

export default FilterByTag;