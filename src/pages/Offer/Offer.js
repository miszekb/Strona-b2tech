import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";

import classes from './Offer.module.css';

const Offer = props => {
    return <SectionWrapper>
        <h2 className={classes.mainHeader}>Nasza oferta</h2>
        <div className={classes.offerContainer}>
            <h4>KOMPLEKSOWE WYKAŃCZANIE MIESZKAŃ I INNYCH WNĘTRZ W STANIE DEWELOPERSKIM</h4>
            <h4>KOMPLEKSOWE REMONTY MIESZKAŃ I WNĘTRZ Z RYNKU WTÓRNEGO</h4>
            (w tym przeróbki elektryczne i hydrauliczne) według projektu własnego inwestora lub we współpracy z architektami wnętrz
            <ul>
                <li>tynki dekoracyjne (strukturalne tynki cienkowarstwowe, tynki mozaikowe, oryginalne tynki modelowane, trawertyny, beton architektoniczny, stiuki i inne)</li>
                <li>suche tynki z płyt g-k</li>
                <li>ścianki, poddasza i sufity podwieszane z płyt g-k</li>
                <li>ścianki i sufity podwieszane z płyt na bazie cementu (możliwe stosowania w pomieszczeniach o wysokiej wilgotności oraz wieszania mebli bez wzmacniania ścian płytami OSB)</li>
                <li>płytki ceramiczne, także balkony i tarasy</li>
                <li>okładziny z kamieni dekoracyjnych</li>
                <li>gładzie (także bezpyłowe)</li>
                <li>panele</li>
                <li>malowanie</li>
                <li>ocieplenia</li>
                <li>wylewki samopoziomujące cementowe i anhydrytowe</li>
                <li>czyszczenie (w tym także usuwanie mchów i porostów), naprawy i malowanie elewacji, ogrodzeń i innych budowli</li>
                <li>demontaż i montaż stolarki drzwiowej i okiennej</li>
            </ul>
            <p>
                Prace realizujemy w możliwie najszybszym terminie, zazwyczaj nie prowadzimy prac na kilku inwestycjach jednocześnie.
                Pracujemy na materiałach powierzonych i własnych.
                Możliwa jest praca w systemie podwykonawstwa.
                Jesteśmy płatnikiem VAT.`
            </p>
        </div>
    </SectionWrapper>
}

export default Offer;