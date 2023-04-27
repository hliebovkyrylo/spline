import React from "react";

import styles from "./toolsCard.module.css";

export const ToolsCard = ({
    image,
    text, 
    description,
}) => {
    return (
        <div className={styles.toolsItem}>
            <img className={styles.toolsImg} src={image} alt="" />
            <span className={styles.text}>{text}</span>
            <p className={styles.description}>{description}</p>
        </div>
    )
};