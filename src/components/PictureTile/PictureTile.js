import React from "react";

import classes from './PictureTile.module.css';

const PictureTile = props => {

    const onImageClick = () => {

    }

    return <div className={classes.pictureTile} on>
        <div className={classes.imageOverlay}>
            <span>Wykończenie elewacji</span>
        </div>
        <img
            className={classes.tileImage}
            src="https://www.thehousedesigners.com/images/uploads/SiteImage-Landing-house-plans-with-photos-1.webp"
        />

    </div>
}

export default PictureTile;