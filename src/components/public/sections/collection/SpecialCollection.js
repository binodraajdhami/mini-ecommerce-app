import React from 'react';
import { Link } from 'react-router-dom';

const SpecialCollection = () => {
    return (
        <section className="collection-product">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <Link to="/collection/look-back-2020">
                            <div className="collection-product-content">
                                <div className="collection-product-image">
                                    <img src={process.env.PUBLIC_URL + '/assets/images/collecton-product-image1.jpg'} alt="collection_image" />
                                </div>
                                <div className="collection-product-short-info">
                                    <span>
                                        <h4>Look Back 2020</h4>
                                        <h5>Make Love This Look</h5>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-6">
                        <Link to="/collection/summer-sale">
                            <div className="collection-product-content">
                                <div className="collection-product-image">
                                    <img src={process.env.PUBLIC_URL + '/assets/images/collecton-product-image2.jpg'} alt="collection_image" />
                                </div>
                                <div className="collection-product-short-info">
                                    <span>
                                        <h4>Summer Sale</h4>
                                        <h5>Up To 70%</h5>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SpecialCollection;