import React, { useState } from "react";

import classes from './BurgerMenu.module.css';

const BurgerMenuOpen = props => {
    return <div className={classes.burgerMenu} onClick={props.onClick}>
        <div className={classes.burgerMenuBar}/>
        <div className={classes.burgerMenuBar}/>
        <div className={classes.burgerMenuBar}/>
    </div>;
}

const BurgerMenuClose = props => {
    return <div className={classes.burgerMenu} onClick={props.onClick}>
        <div className={classes.burgerMenuClose}>X</div>
    </div>;
}

const BurgerMenuToggle = props => {

    return props.isMenuOpened ? <BurgerMenuClose onClick={props.toggleBurgerMenu}/> :
        <BurgerMenuOpen onClick={props.toggleBurgerMenu}/>;
}

export default BurgerMenuToggle;