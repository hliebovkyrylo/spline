import React, { useState } from "react";

import styles from "./code.module.css";

export const CodeView = () => {
    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <>
            {open ? (
                <div className={styles.code}>
                    <code className={styles.code}>
                        <div  style={{marginBottom: 20}}>
                            <span className={styles.blue}>import</span>
                            <span className={styles.lightBlue}> Spline</span>
                            <span className={styles.blue}> from</span>
                            <span className={styles.orange}> '@splinetool/react-spline';</span>
                        </div>
                        <div>
                            <span className={styles.blue}>export</span>
                            <span className={styles.blue}> default</span>
                            <span className={styles.blue}> function</span>
                            <span className={styles.yellow}> App</span>
                            <span className={styles.white}>()</span>
                            <span className={styles.white}>{" {"}</span>
                        </div>
                        <div>
                            <span className={styles.blue} style={{marginLeft: 20}}>return</span>
                            <span className={styles.white}>{" ("}</span>
                        </div>
                        <div>
                            <span className={styles.white} style={{marginLeft: 40}}>{"<"}</span>
                            <span className={styles.green}>div</span>
                            <span className={styles.white}>{">"}</span>
                        </div>
                        <div>
                            <span className={styles.white} style={{marginLeft: 60}}>{"<"}</span>
                            <span className={styles.green}>Spline</span>
                        </div>
                        <div>
                            <span className={styles.lightBlue} style={{marginLeft: 80}}>scene</span>
                            <span className={styles.white}>="</span>
                            <span className={styles.orange}>https://prod.spline.design/</span>
                        </div>
                        <div>
                            <span className={styles.orange}>TRfTj83xgjIdHPmT/scene.spline</span>
                            <span className={styles.white}>"</span>
                        </div>
                        <div>
                            <span className={styles.white} style={{marginLeft: 60}}>{"/>"}</span>
                        </div>
                        <div>
                            <span className={styles.white} style={{marginLeft: 40}}>{"</"}</span>
                            <span className={styles.green}>div</span>
                            <span className={styles.white}>{">"}</span>
                        </div>
                        <div>
                            <span className={styles.white} style={{marginLeft: 20}}>{"("}</span>
                        </div>
                        <div>
                            <span className={styles.white}>{"}"}</span>
                        </div>
                    </code>
                    <div className={styles.codeBtn}>
                        <button type="button" onClick={handleOpen} className={styles.buttonCode}>Hide</button>
                    </div>
                </div>
            ) : (
                <div className={styles.codeBtn}>
                    <button type="button" onClick={handleOpen} className={styles.buttonCode}>Show</button>
                </div>
            )}
        </>
    )
};