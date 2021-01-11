import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ProductsContext } from './../../../../contextAPI/ProductsContext';
import ProductCard from './../../../reuseable-component/ProductCard';

const SingleCategory = () => {

    const [products] = useContext(ProductsContext);

    const product = products.filter(item => item.category === 'female').map((item, i) => {
        let productUrl = `/product/${item.id}`;
        return (
            <div key={i} className="col-md-3">
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
                            <Link to="/product-category">Category</Link>
                            <i className="fa fa-angle-double-right"></i>
                            Single Category
                        </h4>
                        <ul>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                        </ul>
                        <h3>Single Category</h3>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container">
                    <h2>Single Category's Product</h2>
                    <div className="product-archive-content-body">
                        <div className="row">
                            {product}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleCategory;