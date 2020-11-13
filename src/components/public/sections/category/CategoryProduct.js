import React from 'react';
import { Link } from 'react-router-dom';

const CategoryProduct = () => {
    return (
        <section className="category">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="category-product category-product-1">
                            <img src={process.env.PUBLIC_URL + '/assets/images/cat1.jpg'} alt="category-product" />
                            <Link to="/product-category/women">Women</Link>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="category-product category-product-2">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/cat2.jpg'} alt="category-product" />
                                            <Link to="/product-category/accessories">Accessories</Link>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="category-product category-product-3">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/cat2.jpg'} alt="category-product" />
                                            <Link to="/product-category/footwear">Footwear</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="category-product category-product-4">
                                    <img src={process.env.PUBLIC_URL + '/assets/images/cat3.jpg'} alt="category-product" />
                                    <Link to="/product-category/watches">Watches</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CategoryProduct;