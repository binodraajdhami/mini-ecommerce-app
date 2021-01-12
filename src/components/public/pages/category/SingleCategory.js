import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import ProductCard from './../../../reuseable-component/ProductCard';

const SingleCategory = () => {

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