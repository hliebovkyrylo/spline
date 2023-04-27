import React from "react";

import styles from "./dowload.module.css";

export const DowloadButton = ({
    image,
    text
}) => {
    return (
        <>
            <button className={styles.linkDowload} type="button">
                <img src={image} alt="" />
                <div>{text}</div>
            </button>
        </>
    )
};