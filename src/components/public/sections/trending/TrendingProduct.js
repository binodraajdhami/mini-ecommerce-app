import React, { useContext } from 'react';
import Slider from 'react-slick';

import ProductCard from './../../../reuseable-component/ProductCard';

const TrendingProduct = () => {

    const products = [
        {
            id: 1,
            title: 'City Backpack Black',
            price: '250',
            decription: 'Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.',
            beforeImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image1.jpg',
            afterImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image2.jpg',
            topSale: true,
            views: 0,
            category: 'accessories',
            brand: '',
            color: ['red', 'black', 'white', 'green', 'blue', 'orange', 'brown', 'pink']
        },
        {
            id: 2,
            title: 'Skinny Jeans In Black',
            price: '100',
            decription: 'Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.',
            beforeImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image3.jpg',
            afterImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image4.jpg',
            topSale: true,
            views: 0,
            category: 'female',
            brand: '',
            color: ['red', 'black', 'white', 'green', 'blue', 'orange', 'brown', 'pink']
        },
        {
            id: 3,
            title: 'Mercury Tee',
            price: '680',
            decription: 'Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.',
            beforeImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image5.jpg',
            afterImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image6.jpg',
            topSale: false,
            views: 0,
            category: 'female',
            brand: '',
            color: ['red', 'black', 'white', 'green', 'blue', 'orange', 'brown', 'pink']
        },
        {
            id: 4,
            title: 'Herschel Retreat Backpack',
            price: '490',
            decription: 'Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.',
            beforeImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image7.jpg',
            afterImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image8.jpg',
            topSale: true,
            views: 0,
            category: 'male',
            brand: '',
            color: ['red', 'black', 'white', 'green', 'blue', 'orange', 'brown', 'pink']
        },
        {
            id: 5,
            title: 'Short Sleeved Hoodie',
            price: '290',
            decription: 'Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.',
            beforeImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image9.jpg',
            afterImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image10.jpg',
            topSale: false,
            views: 0,
            category: 'female',
            brand: '',
            color: ['red', 'black', 'white', 'green', 'blue', 'orange', 'brown', 'pink']
        },
        {
            id: 6,
            title: 'Sweatshirt in Geometric Print',
            price: '350',
            decription: 'Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.',
            beforeImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image11.jpg',
            afterImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image12.jpg',
            topSale: true,
            views: 0,
            category: 'female',
            brand: '',
            color: ['red', 'black', 'white', 'green', 'blue', 'orange', 'brown', 'pink']
        },
        {
            id: 7,
            title: 'Dusk Pom Beanie',
            price: '115',
            decription: 'Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.',
            beforeImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image13.jpg',
            afterImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image14.jpg',
            topSale: false,
            views: 0,
            category: 'accessories',
            brand: '',
            color: ['red', 'black', 'white', 'green', 'blue', 'orange', 'brown', 'pink']
        },
        {
            id: 8,
            title: 'Circle Snapback Cap',
            price: '750',
            decription: 'Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.',
            beforeImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image15.jpg',
            afterImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image16.jpg',
            topSale: true,
            views: 0,
            category: 'male',
            brand: '',
            color: ['red', 'black', 'white', 'green', 'blue', 'orange', 'brown', 'pink']
        }
    ]

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