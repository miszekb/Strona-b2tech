import React from "react";
import { Link } from "react-scroll";

import classes from './BurgerMenu.module.css';

const BurgerMenu = props => {
    return <div className={classes.burgerMenuItemListContainer}>
        <div className={classes.burgerMenuItemList}>
            <Link to='offer' spy={true} smooth={true} offset={-120} duration={500}>
                <div className={classes.menuOption} onClick={props.onOptionClick}>Oferta</div>
            </Link>
            <Link to='gallery' spy={true} smooth={true} offset={-120} duration={500}>
                <div className={classes.menuOption} onClick={props.onOptionClick}>Realizacje</div>
            </Link>
            <Link to='contact' spy={true} smooth={true} offset={-120} duration={500}>
                <div className={classes.menuOption} onClick={props.onOptionClick}>Kontakt</div>
            </Link>
        </div>
    </div>
}

export default BurgerMenu;