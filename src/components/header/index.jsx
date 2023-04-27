import React, { useState } from "react";

import styles from "./header.module.css";

import logo from "../../assets/img/logo.png";

export const Header = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

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
                {open ? (
                    <button className={styles.menu} onClick={handleOpen}>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                    </button>
                ) : (
                    <>
                        <button className={styles.menu} onClick={handleOpen}>
                            <span className={[styles.line, styles.active].join(' ')}></span>
                            <span className={[styles.line, styles.active].join(' ')}></span>
                            <span className={[styles.line, styles.active].join(' ')}></span>
                        </button>
                        <div className={styles.toggleItems}>
                            <div className={styles.itemToggle}>
                                <a href="#">Features</a>
                            </div>
                            <div className={styles.itemToggle}>
                                <a href="#">Examples</a>
                            </div>
                            <div className={styles.itemToggle}>
                                <a href="#">Pricing</a>
                            </div>
                            <div className={styles.itemToggle}>
                                <a href="#">Community</a>
                            </div>
                            <div className={styles.itemToggle}>
                                <a href="#">Twitter</a>
                            </div>
                            <div className={styles.itemToggle}>
                                <a href="#">Docs</a>
                            </div>
                            <div className={styles.itemToggle}>
                                <a href="#">Log in</a>
                            </div>
                            <div className={styles.itemToggle}>
                                <a href="#">Get Started</a>
                            </div>
                        </div>
                    </>
                )}
            </header>
        </div>
    )
};