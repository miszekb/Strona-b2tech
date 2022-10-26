import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import classes from './ImageModal.module.css';

const ModalOverlay = props => {
    return <div className={classes.modalOverlay} onClick={props.disableModal}>
        <div className={classes.modalImageContainer}>
            <button onClick={props.disableModal}>X</button>
            <h2>{props.title}</h2>
            <img src={props.src}/>
        </div>
    </div>
}

const ImageModal = props => {
    return <>
        {createPortal(
            <ModalOverlay
                src={props.src}
                title={props.title}
                disableModal={props.disableModal}
            />,
            document.getElementById('modal'))
        }
    </>; 
}

export default ImageModal;