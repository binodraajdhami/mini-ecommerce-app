import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import ProductCard from './../../../reuseable-component/ProductCard';

const LatestProduct = () => {

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