import React from "react";

import classes from './PageFooter.module.css';

const PageFooter = props => {
    return <div className={classes.pageFooter}>
        <div className={classes.copyrightsNote}>© 2022 by b2tech & Michał Białecki</div>
    </div>
}

export default PageFooter;