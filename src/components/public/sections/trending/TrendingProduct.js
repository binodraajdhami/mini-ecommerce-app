import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Button, Modal } from 'react-bootstrap';

const TrendingProduct = () => {

    const sliderOptions = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    const TrendingProducts = [
        {
            id: 1,
            title: 'City Backpack Black',
            price: '250',
            decription: 'Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.',
            beforeImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image1.jpg',
            afterImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image2.jpg',
        },
        {
            id: 2,
            title: 'Skinny Jeans In Black',
            price: '100',
            decription: 'Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.',
            beforeImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image3.jpg',
            afterImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image4.jpg',
        },
        {
            id: 3,
            title: 'Mercury Tee',
            price: '680',
            decription: 'Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.',
            beforeImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image5.jpg',
            afterImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image6.jpg',
        },
        {
            id: 4,
            title: 'Herschel Retreat Backpack',
            price: '490',
            decription: 'Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.',
            beforeImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image7.jpg',
            afterImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image8.jpg',
        },
        {
            id: 5,
            title: 'Short Sleeved Hoodie',
            price: '290',
            decription: 'Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.',
            beforeImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image9.jpg',
            afterImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image10.jpg',
        },
        {
            id: 6,
            title: 'Sweatshirt in Geometric Print',
            price: '350',
            decription: 'Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.',
            beforeImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image11.jpg',
            afterImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image12.jpg',
        },
        {
            id: 7,
            title: 'Dusk Pom Beanie',
            price: '115',
            decription: 'Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.',
            beforeImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image13.jpg',
            afterImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image14.jpg',
        },
        {
            id: 8,
            title: 'Circle Snapback Cap',
            price: '750',
            decription: 'Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.',
            beforeImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image15.jpg',
            afterImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image16.jpg',
        }
    ]

    const product = TrendingProducts.map((item, i) => {
        let productUrl = `/product/${item.id}`;
        return (
            <div key={i} className="col-sm-3">
                <div className="product-content-item">
                    <div className="product-thumbnail" style={{ background: `URL( ${item.beforeImage} )`, backgroundSize: 'cover' }}>
                        <img src={item.afterImage} alt="before_image" />
                        <div className="hover-layer">
                            <ul>
                                <li>
                                    <span className="button">
                                        <span>Quick View</span>
                                        <i className="fa fa-eye"></i>
                                    </span>
                                </li>
                                <li>
                                    <span className="button">
                                        <span>Add To Cart</span>
                                        <i className="fa fa-shopping-cart"></i>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <span className="whishlist">
                            <span>
                                <i className="fa fa-heart"></i>
                            </span>
                        </span>
                    </div>
                    <div className="product-details">
                        <h4><Link to={productUrl}>{item.title}</Link></h4>
                        <p>Rs. {item.price} /-</p>
                    </div>
                </div>
            </div>
        );
    });

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
            <Modal>
                <Modal.Header>Title</Modal.Header>
                <Modal.Body>
                    Body
                </Modal.Body>
                <Modal.Footer>
                    <Button>Close</Button>
                </Modal.Footer>
            </Modal>
        </section >
    );
}

export default TrendingProduct;