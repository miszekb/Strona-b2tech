import React from "react";

import classes from './SectionWrapper.module.css';

const SectionWrapper = props => {
    return <div className={classes.sectionWrapper} id={props.id}>
        {props.children}
    </div>
}

export default SectionWrapper;