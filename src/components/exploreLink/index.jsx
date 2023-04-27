import React from "react";

import styles from "./explore.module.css";

export const Explore = ({
    image, 
    text,
}) => {
    return (
        <a className={styles.libraryItems} href="#">
            <div className={styles.image}>
                <img className={styles.exampleImg} src={image} alt="" />
            </div>
            <span>{text}</span>
        </a>
    )
};