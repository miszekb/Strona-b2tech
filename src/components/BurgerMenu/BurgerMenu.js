import React from "react";

import classes from './BurgerMenu.module.css';

const BurgerMenu = props => {
    return <div className={classes.burgerMenu}>
        <div className={classes.burgerMenuBar}/>
        <div className={classes.burgerMenuBar}/>
        <div className={classes.burgerMenuBar}/>
    </div>
}

export default BurgerMenu;