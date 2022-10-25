import React from 'react';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';

import classes from './Contact.module.css';

const Contact = () => {
    return <SectionWrapper id="contact">
        <h2 className={classes.mainHeader}>Skontaktuj się z nami</h2>
        <p className={classes.contact}>tel: 795 715 283</p>
        <p className={classes.contact}>e-mail: b.dwa.tech@gmail.com</p>
    </SectionWrapper>
};

export default Contact;