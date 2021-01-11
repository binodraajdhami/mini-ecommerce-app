import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ProductsContext } from './../../../../contextAPI/ProductsContext';
import ProductCard from './../../../reuseable-component/ProductCard';

const LatestProduct = () => {

    const [products] = useContext(ProductsContext);

    const product = products.splice(0, 8).map((item, i) => {
        let productUrl = `product/${item.id}`;
        return (
            <div key={i} className="col-md-3 col-sm-4">
                <ProductCard product={item} productUrl={productUrl} />
            </div>
        );
    });

    return (
        <section className="latest-product">
            <div className="container">
                <div className="latest-product-heading">
                    <h2>Latest</h2>
                    <h4>Top view in this week</h4>
                </div>
                <div className="latest-content-body">
                    <div className="row">
                        {product}
                    </div>
                    <div className="all-latest-product-link">
                        <Link to="/product">View All Products</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LatestProduct;