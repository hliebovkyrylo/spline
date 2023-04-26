import React from "react";

import styles from "./header.module.css";

import logo from "../../assets/img/logo.png";

export const Header = () => {
    return (
        <div className={styles.headercontainer}>
            <header className={styles.header}>
                <img className={styles.logo} src={logo} alt="" />
                <nav className={styles.nav}>
                    <ul className={styles.nav_item}>
                        <li className={styles.nav_links}>
                            <a className={styles.nav_link} href="#">Features</a>
                        </li>
                        <li className={styles.nav_links}>
                            <a className={styles.nav_link} href="#">Examples</a>
                        </li>
                        <li className={styles.nav_links}>
                            <a className={styles.nav_link} href="#">Pricing</a>
                        </li>
                        <li className={styles.nav_links}>
                            <a className={styles.nav_link} href="#">Community</a>
                        </li>
                        <li className={styles.nav_links}>
                            <a className={styles.nav_link} href="#">Twitter</a>
                        </li>
                        <li className={styles.nav_links}>
                            <a className={styles.nav_link} href="#">Docs</a>
                        </li>
                    </ul>
                </nav>
                <div className={styles.buttons}>
                    <a href="#" className={[styles.button, styles.first].join(' ')}>
                        <span className={styles.button__link} href="#">Log in</span>
                    </a>
                    <a href="#" className={styles.button}>
                        <span className={styles.button__link} href="#">Get Started</span>
                    </a>
                </div>
            </header>
        </div>
    )
};