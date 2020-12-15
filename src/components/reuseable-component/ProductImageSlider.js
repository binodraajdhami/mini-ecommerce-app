import React, { useContext, useState } from 'react';
import Slider from 'react-slick';

import { ImageGalleryContext } from './../../contextAPI/ImageGalleryContext';

const ProductImageSlider = () => {

    const setImageGallery = useContext(ImageGalleryContext)[1];

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

    const imagesGallery = [
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

    let images = imagesGallery.map((item, i) => {
        return (
            <img src={item.image} alt="image_gallery" key={i} onClick={() => setImageGallery(item.image)} />
        );
    });

    return (
        <div className="product-image-gallery-slides">
            <Slider {...sliderOptions}>
                {images}
            </Slider>
        </div>
    );
}

export default ProductImageSlider;