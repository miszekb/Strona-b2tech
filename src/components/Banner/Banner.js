import React from "react";

import classes from './Banner.module.css';

const Banner = props => {
    return <div className={classes.bannerContainer}>
        <div className={classes.bannerOverlap}/>
        <div className={classes.bannerImage}>
            <p className={classes.bannerText}>
                Kompleksowe remonty i wykańczanie mieszkań
            </p>
            <button className={classes.bannerButton}>Sprawdź ofertę</button>
        </div>
    </div>
}

export default Banner;