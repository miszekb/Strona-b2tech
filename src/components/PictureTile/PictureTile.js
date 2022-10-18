import React from "react";

import classes from './PictureTile.module.css';

const PictureTile = props => {
    return <div className={classes.pictureTile}>
        <img
            className={classes.tileImage}
            src="https://www.thehousedesigners.com/images/uploads/SiteImage-Landing-house-plans-with-photos-1.webp"
        />
    </div>
}

export default PictureTile;