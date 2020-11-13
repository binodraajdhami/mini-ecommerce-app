import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const Banner = () => {

    const sliderOptions = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    };

    const bannerSlides = [
        {
            id: 1,
            title: 'New Arrival Collection',
            subTitle: 'Summer Sale 2020',
            image: process.env.PUBLIC_URL + '/assets/images/ng-commerce-banner-1.jpg'
        },
        {
            id: 2,
            title: 'Look Back Collecion',
            subTitle: 'New Season',
            image: process.env.PUBLIC_URL + '/assets/images/ng-commerce-banner-2.jpg'
        },
        {
            id: 3,
            title: 'Save up to 70%',
            subTitle: 'Summer Sale',
            image: process.env.PUBLIC_URL + '/assets/images/ng-commerce-banner-3.jpg'
        }
    ]

    let slides = bannerSlides.map((item, i) => {
        let url = `/collection/${item.id}`;
        let addClass = i === 1 ? 'banner-content-item text-align-right' : 'banner-content-item';
        return (
            <div key={i} className="banner-content">
                <img src={item.image} alt="banner_image" />
                <div className={addClass}>
                    <h4>{item.subTitle}</h4>
                    <h2>{item.title}</h2>
                    <Link to={url}>Explore Now</Link>
                </div>
            </div>
        );
    })

    return (
        <section className="banner">
            <Slider {...sliderOptions}>
                {slides}
            </Slider>
        </section>
    );
}

export default Banner;