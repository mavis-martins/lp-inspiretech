import React from 'react';
import styles from './button.module.css'


function Button ({link, imgSrc, imgAlt, spanText, imgButton}) {

    return(
        <a className={styles.button} href={link}>
            <img className={imgButton} src={imgSrc} alt={imgAlt}/>
            <span>{spanText}</span>
        </a>
    )
}

export default Button;