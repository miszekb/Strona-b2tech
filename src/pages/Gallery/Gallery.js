import React from 'react';
import PictureTile from '../../components/PictureTile/PictureTile';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';

import classes from './Gallery.module.css';

const Gallery = () => {
    return <SectionWrapper>
        <h2 className={classes.mainHeader}>Nasze realizacje</h2>
        <div className={classes.galleryContainer}>
            <PictureTile/>
            <PictureTile/>
            <PictureTile/>
            <PictureTile/>
        </div>
    </SectionWrapper>
}

export default Gallery;