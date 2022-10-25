import React, { useEffect, useState } from "react";
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
            <div className={classes.menuOption}>Oferta</div>
            <div className={classes.menuOption}>Realizacje</div>
            <div className={classes.menuOption}>Kontakt</div>
        </div>
        { (windowWidth < WINDOW_WIDTH_FOR_BURGER_MENU) && <BurgerMenu/> }
    </div>
}

export default PageHeader;