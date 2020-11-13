import React from 'react';

import Banner from './../../sections/banner/Banner';
import CategoryProduct from './../../sections/category/CategoryProduct';
import TrendingProduct from './../../sections/trending/TrendingProduct';
import SpecialCollection from './../../sections/collection/SpecialCollection';
import LatestProduct from './../../sections/latest/LatestProduct';
import BlogPost from './../../sections/blog/BlogPost';

const Home = () => {
    return (
        <>
            <Banner />
            <CategoryProduct />
            <TrendingProduct />
            <SpecialCollection />
            <LatestProduct />
            <BlogPost />
        </>
    );
}

export default Home;