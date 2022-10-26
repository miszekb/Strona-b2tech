import React, { useEffect } from 'react';
import PictureTile from '../../components/PictureTile/PictureTile';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';

import classes from './GalleryPage.module.css';

//TODO: make it smarter (obviously)
const NUMBER_OF_PHOTOS = 22;

const GalleryPage = () => {
    const renderPhotos = () => {
        const imagesPaths = []
        for (let index = 0; index < NUMBER_OF_PHOTOS; index++) {
            imagesPaths.push(`./images/${index + 1}.jpg`);
        }

        return imagesPaths.map(imagePath => <PictureTile key={imagePath} src={imagePath}/>);
    }

    return  <SectionWrapper id="gallery">
            <h2 className={classes.mainHeader}>Dotychczasowe realizacje</h2>
            <div className={classes.galleryContainer}>
                {renderPhotos()}
            </div>
        </SectionWrapper>
}

export default GalleryPage;