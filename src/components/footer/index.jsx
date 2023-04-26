import React from "react";

import styles from "./footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <span>©2023 - Spline, Inc.</span>
                <div>
                    <a href="#">Terms & Conditions,</a>
                    <a href="#">Privacy</a>
                </div>
            </div>
        </footer>
    )
};