import React, { createContext, useState } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {

    const [products, setProducts] = useState(
        [
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
            },
            {
                id: 9,
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
                id: 10,
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
                id: 11,
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
                id: 12,
                title: 'Herschel Retreat Backpack',
                price: '490',
                decription: 'Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.',
                beforeImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image7.jpg',
                afterImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image8.jpg',
                topSale: false,
                views: 0,
                category: 'male',
                brand: '',
                color: ['red', 'black', 'white', 'green', 'blue', 'orange', 'brown', 'pink']
            },
            {
                id: 13,
                title: 'Short Sleeved Hoodie',
                price: '290',
                decription: 'Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.',
                beforeImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image9.jpg',
                afterImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image10.jpg',
                topSale: true,
                views: 0,
                category: 'female',
                brand: '',
                color: ['red', 'black', 'white', 'green', 'blue', 'orange', 'brown', 'pink']
            },
            {
                id: 14,
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
                id: 15,
                title: 'Dusk Pom Beanie',
                price: '115',
                decription: 'Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.',
                beforeImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image13.jpg',
                afterImage: process.env.PUBLIC_URL + '/assets/images/popular-product-image14.jpg',
                topSale: true,
                views: 0,
                category: 'accessories',
                brand: '',
                color: ['red', 'black', 'white', 'green', 'blue', 'orange', 'brown', 'pink']
            },
            {
                id: 16,
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
    );

    return (
        <ProductsContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductsContext.Provider>
    );
}