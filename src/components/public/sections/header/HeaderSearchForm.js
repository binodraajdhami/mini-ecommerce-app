import React from 'react';

const HeaderSearchForm = () => {
    return (
        <div className="header-search-form">
            <form className="from">
                <div className="form-group">
                    <input type="text" name="search" className="form-control" placeholder="Search any product here.." />
                    <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
                </div>
            </form>
        </div>
    );
}

export default HeaderSearchForm;