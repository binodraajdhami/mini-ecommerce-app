import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const BlogPost = () => {

    const sliderOptions = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: "row"
    };

    const blogPosts = [
        {
            id: 1,
            title: 'Style for couple in Weeding season',
            author: 'Admin',
            postOn: '15 September, 2019',
            decription: 'Typography is the work of typesetters, compositors, typographers...',
            image: process.env.PUBLIC_URL + '/assets/images/blog-image1.jpg'
        },
        {
            id: 2,
            title: 'The Easiest Way to Break Out on Top',
            author: 'Admin',
            postOn: '18 September, 2019',
            decription: 'Typography is the work of typesetters, compositors, typographers...',
            image: process.env.PUBLIC_URL + '/assets/images/blog-image2.jpg'
        },
        {
            id: 3,
            title: 'Spring – Summer Trending 2020',
            author: 'Admin',
            postOn: '20 September, 2019',
            decription: 'Typography is the work of typesetters, compositors, typographers...',
            image: process.env.PUBLIC_URL + '/assets/images/blog-image3.jpg'
        },
        {
            id: 4,
            title: 'Style for couple in Weeding season',
            author: 'Admin',
            postOn: '15 September, 2019',
            decription: 'Typography is the work of typesetters, compositors, typographers...',
            image: process.env.PUBLIC_URL + '/assets/images/blog-image1.jpg'
        },
        {
            id: 5,
            title: 'The Easiest Way to Break Out on Top',
            author: 'Admin',
            postOn: '18 September, 2019',
            decription: 'Typography is the work of typesetters, compositors, typographers...',
            image: process.env.PUBLIC_URL + '/assets/images/blog-image2.jpg'
        },
        {
            id: 6,
            title: 'Spring – Summer Trending 2020',
            author: 'Admin',
            postOn: '20 September, 2019',
            decription: 'Typography is the work of typesetters, compositors, typographers...',
            image: process.env.PUBLIC_URL + '/assets/images/blog-image3.jpg'
        }
    ]

    const post = blogPosts.map((item, i) => {
        let postUrl = `blog/${item.id}`;
        return (
            <div key={i} className="col-sm-4">
                <div className="blog-section-content">
                    <div className="blog-section-item-img">
                        <Link to={postUrl}>
                            <img src={item.image} alt="post_image" />
                        </Link>
                    </div>
                    <div className="blog-section-item-details">
                        <h4><Link to={postUrl}>{item.title}</Link></h4>
                        <h5>
                            By: <span>{item.author}</span>, On: <span>{item.postOn}</span>
                        </h5>
                        <p>{item.decription}</p>
                    </div>
                </div>
            </div>
        );
    })
    return (
        <section className="blog-section">
            <div className="container">
                <div className="blog-section-heading">
                    <h2>Latest From Blog</h2>
                    <h4>The freshest and most exciting news</h4>
                </div>
                <div className="blog-section-content-body">
                    <Slider {...sliderOptions}>
                        {post}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default BlogPost;