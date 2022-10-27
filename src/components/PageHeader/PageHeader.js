import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll"; 
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import BurgerMenuToggle from "../BurgerMenu/BurgerMenuToggle";

import classes from './PageHeader.module.css';

const WINDOW_WIDTH_FOR_BURGER_MENU = 940;

const PageHeader = () => {
    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
    const [ isMenuOpened, setIsMenuOpened ] = useState(false);

    const toggleBurgerMenu = () => {
        setIsMenuOpened(!isMenuOpened);
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
        })
    }, []);

    return <>
        <div className={classes.pageHeader}>
            <NavLink to='/'>
                <Link to='banner' spy={true} smooth={true} offset={-120} duration={500}>
                    <div className={classes.pageHeaderTitle} onClick={isMenuOpened ? toggleBurgerMenu : () => {}}>
                        b2tech
                        <span>
                            <img className={classes.logoIcon} src='./icon.png'/>
                        </span>
                    </div>
                </Link>
            </NavLink>
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
            { (windowWidth < WINDOW_WIDTH_FOR_BURGER_MENU) && <BurgerMenuToggle
                isMenuOpened={isMenuOpened}
                toggleBurgerMenu={toggleBurgerMenu}
            /> }
        </div>
        { isMenuOpened && <BurgerMenu onOptionClick={toggleBurgerMenu}/> }
    </>
}

export default PageHeader;