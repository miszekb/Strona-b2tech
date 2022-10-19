import React from 'react';
import Banner from '../../components/Banner/Banner';
import PageFooter from '../../components/PageFooter/PageFooter';
import PageHeader from '../../components/PageHeader/PageHeader';
import SectionSeparator from '../../components/SectionSeparator/SectionSeparator';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';
import Offer from '../Offer/Offer';

const MainPage = () => {
    return <>
        <PageHeader/>
        <Banner/>
        <Offer/>
        <SectionSeparator/>
        <Gallery/>
        <SectionSeparator/>
        <Contact/>
        <PageFooter/>
    </>
}

export default MainPage;