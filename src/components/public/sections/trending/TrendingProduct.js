import React, { useContext } from 'react';
import Slider from 'react-slick';

import { ProductsContext } from './../../../../contextAPI/ProductsContext';
import ProductCard from './../../../reuseable-component/ProductCard';

const TrendingProduct = () => {

    const [products] = useContext(ProductsContext);

    const product = products.filter(item => item.topSale === true).map((item, i) => {
        let productUrl = `/product/${item.id}`;
        return (
            <div key={i} className="col-sm-3">
                <ProductCard product={item} productUrl={productUrl} />
            </div>
        );
    })

    const sliderOptions = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (

        <section className="popular-product">
            <div className="container">
                <div className="popular-product-heading">
                    <h2>Trending</h2>
                    <h4>Top sale in this week</h4>
                </div>
                <div className="popular-product-body">
                    <Slider {...sliderOptions}>
                        {product}
                    </Slider>
                </div>
            </div>
        </section >
    );
}

export default TrendingProduct;