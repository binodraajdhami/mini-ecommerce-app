import React, { createContext, useState } from 'react';

export const ImageGalleryContext = createContext();

export const ImageGalleryProvider = (props) => {

    const [imageGallery, setImageGallery] = useState('');

    return (
        <ImageGalleryContext.Provider value={[imageGallery, setImageGallery]}>
            {props.children}
        </ImageGalleryContext.Provider>
    );
}