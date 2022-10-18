import React from "react";

import classes from './PageHeader.module.css';

const PageHeader = props => {
    return <div className={classes.pageHeader}>
        <div className={classes.pageHeaderTitle}>
            b2tech
            <span><img className={classes.logoIcon} src='./icon.png'/></span>
        </div>
        <div className={classes.menuOptionsContainer}>
            <div className={classes.menuOption}>Oferta</div>
            <div className={classes.menuOption}>Realizacje</div>
            <div className={classes.menuOption}>Kontakt</div>
        </div>
    </div>
}

export default PageHeader;