import React from 'react';

const FilterByColor = () => {
    return (
        <div className="filter-content-by-color">
            <h4>Filter by Color</h4>
            <div className="radio">
                <label>
                    <input type="radio" name="filterByColor" />Black
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="filterByColor" />White
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="filterByColor" />Blue
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="filterByColor" />Red
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="filterByColor" />Green
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="filterByColor" />Yello
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="filterByColor" />Pink
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="filterByColor" />Brown
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="filterByColor" />Grey
                </label>
            </div>
        </div>
    );
}

export default FilterByColor;