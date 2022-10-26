import React from 'react';
import PictureTile from '../../components/PictureTile/PictureTile';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';

import classes from './Gallery.module.css';

const Gallery = () => {
    return <SectionWrapper id="gallery">
        <h2 className={classes.mainHeader}>Nasze realizacje</h2>
        <div className={classes.galleryContainer}>
            <PictureTile src="./images/15.jpg" title="Łazienka, nowe mieszkanie (Łódź)"/>
            <PictureTile src="./images/1.jpg" title="Wykończenie nowego mieszkania (Łódź)"/>
            <PictureTile src="./images/21.jpg" title="Łazienka, nowe mieszkanie (Łódź)"/>
            <PictureTile src="./images/4.jpg" title="Sypialnia, nowe mieszkanie (Łódź)"/>
        </div>
    </SectionWrapper>
}

export default Gallery;