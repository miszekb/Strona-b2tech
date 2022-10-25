import React from "react";
import { Link } from "react-scroll";

import classes from './Banner.module.css';

const Banner = props => {
    return <div className={classes.bannerContainer}>
        <div className={classes.bannerOverlap}/>
        <div className={classes.bannerImage}>
            <p className={classes.bannerText}>
                Kompleksowe remonty i wykańczanie mieszkań
            </p>
            <Link to='offer' spy={true} smooth={true} offset={-120} duration={500} className={classes.bannerButtonLink}>
                <button className={classes.bannerButton}>
                    Sprawdź ofertę
                </button>
            </Link>
        </div>
    </div>
}

export default Banner;