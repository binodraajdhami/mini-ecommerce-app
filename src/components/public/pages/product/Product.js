import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ProductsContext } from './../../../../contextAPI/ProductsContext'
import ProductCard from './../../../reuseable-component/ProductCard';
import FilterByCategory from './../../../reuseable-component/FilterByCategory';
import FilterByBrand from './../../../reuseable-component/FilterByBrand';
import FilterByPrice from './../../../reuseable-component/FilterByPrice';
import FilterByColor from './../../../reuseable-component/FilterByColor';
import FilterByTag from './../../../reuseable-component/FilterByTag';

const ProductPage = () => {

    const [products] = useContext(ProductsContext);

    const allProducts = products.map((item, i) => {
        let productUrl = `product/${item.id}`;
        return (
            <div key={i} className="col-md-4 col-sm-6">
                <ProductCard product={item} productUrl={productUrl} />
            </div>
        );
    });

    return (
        <>
            <div className="content-banner">
                <div className="container">
                    <div className="content-banner-content">
                        <h4>
                            <Link to="/">Home</Link>
                            <i className="fa fa-angle-double-right"></i>
                            Product
                        </h4>
                        <ul>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                        </ul>
                        <h3>All Products</h3>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="filter-content">
                                <FilterByCategory></FilterByCategory>
                                <FilterByBrand></FilterByBrand>
                                <FilterByPrice></FilterByPrice>
                                <FilterByColor></FilterByColor>
                                <FilterByTag></FilterByTag>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="product-archive-content-body">
                                <div className="row">
                                    {allProducts}
                                </div>
                            </div>
                            <div className="load-more-product">
                                <button className="btn btn-info">Load More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductPage;