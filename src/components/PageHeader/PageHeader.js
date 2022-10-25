import React, { useEffect, useState } from "react";
import { Link } from "react-scroll"; 
import BurgerMenu from "../BurgerMenu/BurgerMenu";

import classes from './PageHeader.module.css';

const WINDOW_WIDTH_FOR_BURGER_MENU = 940;

const PageHeader = () => {
    const [ windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
        })
    }, []);

    return <div className={classes.pageHeader}>
        <div className={classes.pageHeaderTitle}>
            b2tech
            <span>
                <img className={classes.logoIcon} src='./icon.png'/>
            </span>
        </div>
        <div className={classes.menuOptionsContainer}>
            <Link to='offer' spy={true} smooth={true} offset={-120} duration={500}>
                <div className={classes.menuOption}>Oferta</div>
            </Link>
            <Link to='gallery' spy={true} smooth={true} offset={-120} duration={500}>
                <div className={classes.menuOption}>Realizacje</div>
            </Link>
            <Link to='contact' spy={true} smooth={true} offset={-120} duration={500}>
                <div className={classes.menuOption}>Kontakt</div>
            </Link>
        </div>
        { (windowWidth < WINDOW_WIDTH_FOR_BURGER_MENU) && <BurgerMenu/> }
    </div>
}

export default PageHeader;