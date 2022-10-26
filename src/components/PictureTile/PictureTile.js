import React, { useCallback, useEffect, useRef, useState } from "react";
import ImageModal from "../ImageModal/ImageModal";

import classes from './PictureTile.module.css';

const PictureTile = props => {
    const [ imgWidth, setImageWidth ] = useState(0);
    const [ displayModal, setDisplayModal ] = useState(false);

    const imageElement = useRef();

    const scaleImage = useCallback(() => {
        const image = imageElement.current;
        const { naturalWidth, naturalHeight } = image;
        const scaledWidth = naturalWidth * (140 / naturalHeight);
    
        setImageWidth(scaledWidth > 140 ? 140 : scaledWidth);
    });

    const enableModal = () => setDisplayModal(true)
    const disableModal = () => setDisplayModal(false);

    return <>
        {displayModal && <ImageModal src={props.src} disableModal={disableModal} title={props.title}/>}
        <div className={classes.pictureTile} onClick={enableModal}>
            <div className={classes.imageOverlay}>
                <span>{props.title}</span>
            </div>
            <img
                alt="Error when loading the resource"
                onLoad={scaleImage}
                className={classes.tileImage}
                src={props.src}
                ref={imageElement}
                width={imgWidth}
            />
        </div>
    </> 

}

export default PictureTile;