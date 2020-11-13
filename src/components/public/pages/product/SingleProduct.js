import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import Slider from 'react-slick';
import { Tabs, Tab } from '@material-ui/core';

const SingleProduct = () => {

    const [cartItem, setCartItem] = useState(0);
    const [whishlist, setWhishlist] = useState(false);

    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    }

    const colorLists = [
        { id: 1, color: '#1abc9c' },
        { id: 2, color: '#2ecc71' },
        { id: 3, color: '#3498db' },
        { id: 4, color: '#9b59b6' },
        { id: 5, color: '#bdc3c7' }
    ]

    const [selectedIndex, setSelectedIndex] = useState(0);

    let displayColor = colorLists.map((item, index) => {
        return (
            <li key={index}>
                <span onClick={() => setSelectedIndex(index)} style={{ backgroundColor: item.color }}>
                    {index === selectedIndex ? <i className="fa fa-check"></i> : ''}
                </span>
            </li>
        );
    });

    const sliderOptions = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
    };

    const [imageUrl, setImage] = useState(process.env.PUBLIC_URL + '/assets/images/popular-product-image1.jpg');

    const imageGallery = [
        {
            id: 1,
            image: process.env.PUBLIC_URL + '/assets/images/popular-product-image1.jpg'
        },
        {
            id: 2,
            image: process.env.PUBLIC_URL + '/assets/images/popular-product-image2.jpg'
        },
        {
            id: 3,
            image: process.env.PUBLIC_URL + '/assets/images/popular-product-image3.jpg'
        },
        {
            id: 4,
            image: process.env.PUBLIC_URL + '/assets/images/popular-product-image4.jpg'
        },
        {
            id: 5,
            image: process.env.PUBLIC_URL + '/assets/images/popular-product-image5.jpg'
        },
        {
            id: 6,
            image: process.env.PUBLIC_URL + '/assets/images/popular-product-image6.jpg'
        },
        {
            id: 7,
            image: process.env.PUBLIC_URL + '/assets/images/popular-product-image7.jpg'
        },
        {
            id: 8,
            image: process.env.PUBLIC_URL + '/assets/images/popular-product-image8.jpg'
        },
        {
            id: 9,
            image: process.env.PUBLIC_URL + '/assets/images/popular-product-image9.jpg'
        },
        {
            id: 10,
            image: process.env.PUBLIC_URL + '/assets/images/popular-product-image10.jpg'
        }
    ]

    let images = imageGallery.map((item, i) => {
        return (
            <img src={item.image} alt="image_gallery" key={i} onClick={() => setImage(item.image)} />
        );
    });

    const productSliderOptions = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        className: 'row'
    };

    const relatedProducts = [
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

    let products = relatedProducts.map((item, i) => {
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
        <>
            <div className="content-banner">
                <div className="container">
                    <div className="content-banner-content">
                        <h4>
                            <Link to="/">Product</Link>
                            <i className="fa fa-angle-double-right"></i>
                            Pieces High Neck Knitted Sweater
                        </h4>
                        <ul>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                        </ul>
                        <h3>Pieces High Neck Knitted Sweater</h3>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container">
                    <div className="product-details">
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="product-image-gallery">
                                    <ReactImageMagnify {...{
                                        smallImage: {
                                            alt: 'Wristwatch by Ted Baker London',
                                            isFluidWidth: true,
                                            src: imageUrl
                                        },
                                        largeImage: {
                                            src: imageUrl,
                                            width: 1400,
                                            height: 1800
                                        }
                                    }} />
                                    <div className="product-image-gallery-slides">
                                        <Slider {...sliderOptions}>
                                            {images}
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <div className="product-short-description">
                                    <h2>Pieces High Neck Knitted Sweater</h2>
                                    <h4 className="price">Rs. 1500 /-</h4>
                                    <p>Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.</p>

                                    <div className="select-product-color">
                                        <h4>Colors: </h4>
                                        <ul>
                                            {displayColor}
                                        </ul>
                                    </div>
                                    <div className="add-to-cart-button-block">
                                        <p>Only 10 item in stock</p>
                                        {
                                            cartItem <= 0
                                                ? <div className="add-to-cart-button">
                                                    <span className="btn btn-success" onClick={() => setCartItem(cartItem + 1)}>Add To Cart</span>
                                                </div>
                                                : ''
                                        }
                                        {
                                            cartItem > 0
                                                ? <>
                                                    <div className="after-add-to-cart-button">
                                                        <span className="btn btn-success" onClick={() => setCartItem(cartItem - 1)}>
                                                            <i className="fa fa-minus"></i>
                                                        </span>
                                                        <span className="cart-item">{cartItem}</span>
                                                        {
                                                            cartItem < 10
                                                                ? <span className="btn btn-success" onClick={() => setCartItem(cartItem + 1)}>
                                                                    <i className="fa fa-plus"></i>
                                                                </span>
                                                                : <span className="btn btn-danger">
                                                                    <i className="fa fa-ban"></i>
                                                                </span>
                                                        }
                                                    </div>
                                                    <Link to="/cart" className="btn btn-danger view-cart">View Cart</Link>
                                                </>
                                                : ''
                                        }

                                        <div className="add-to-whishlist-button">

                                            {
                                                whishlist
                                                    ? <Link to="/whishlist" className="btn btn-primary">View Whishlist</Link>
                                                    : <span className="btn btn-info" onClick={() => setWhishlist(true)}>Add To Whishlist</span>
                                            }
                                        </div>
                                    </div>
                                    <div className="product-category-info">
                                        <h4>Category</h4>
                                        <ul>
                                            <li>Womens</li>
                                            <li>Womens Bags</li>
                                        </ul>
                                    </div>
                                    <div className="product-tags-info">
                                        <h4>Tags</h4>
                                        <ul>
                                            <li>Womens</li>
                                            <li>Bags</li>
                                            <li>Accessories</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-specifications">
                        <h4>Product Specifications</h4>

                        <Tabs value={selectedTab} onChange={handleTabChange}>
                            <Tab label="Specification" />
                            <Tab label="Reviews" />
                        </Tabs>

                    </div>
                    <div className="related-product">
                        <h4>Related Products</h4>
                        <Slider {...productSliderOptions}>
                            {products}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleProduct;