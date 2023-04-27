import React from "react";

import styles from "../toolsCard/toolsCard.module.css";

export const ToolsMore = ({
    image,
    text,
    description
}) => {
    return (
        <div className={[styles.toolsItem, styles.toolsMoreItem].join(' ')}>
            <div className={styles.toolImg}>
                <img className={[styles.toolsImg, styles.toolsMoreImg].join(' ')} src={image} alt="" />
            </div>
            <span className={styles.text}>{text}</span>
            <p className={[styles.description, styles.descriprionSmall].join(' ')}>{description}</p>
        </div>
    )
};