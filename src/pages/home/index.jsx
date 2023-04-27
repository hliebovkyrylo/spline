import React, { useState } from "react";
import Spline from "@splinetool/react-spline";

import styles from "./home.module.css";

import { Footer } from "../../components/index";

// import images & video
import checkMark from "../../assets/img/icons/1.svg";
import firstExample from "../../assets/img/examples/1.png";
import secondExample from "../../assets/img/examples/2.png";
import thirdExample from "../../assets/img/examples/3.png";
import fourthExample from "../../assets/img/examples/4.png";
import fifthExample from "../../assets/img/examples/5.png";

import tools1 from "../../assets/img/tools/1.png";
import tools2 from "../../assets/img/tools/2.png";
import tools3 from "../../assets/img/tools/3.png";
import tools4 from "../../assets/img/tools/4.png";
import tools5 from "../../assets/img/tools/5.png";
import tools6 from "../../assets/img/tools/6.png";

import toolsMore1 from "../../assets/img/logos/1.png";
import toolsMore2 from "../../assets/img/logos/2.png";
import toolsMore3 from "../../assets/img/logos/3.png";
import toolsMore4 from "../../assets/img/logos/4.png";
import toolsMore5 from "../../assets/img/logos/5.png";
import toolsMore6 from "../../assets/img/logos/6.png";
import toolsMore7 from "../../assets/img/logos/7.png";
import toolsMore8 from "../../assets/img/logos/8.png";
import toolsMore9 from "../../assets/img/logos/9.png";

import Video from "../../assets/video/1.mp4";

export const Home = () => {
    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <>
            {/* ---INTRO--- */}
            <section className={styles.intro}>
                <div className={[styles.container, styles.introContainer].join(' ')}>
                    <div className={styles.intro__inner}>
                        <h1 className={styles.intro__title}>Spline, made with Duncan Oluwaseun in 3D.</h1>
                        <div className={styles.intro__subtitle}>
                            <div className={styles.item}>
                                <img src={checkMark} alt="" />
                                <span className={styles.item__text}>Web-Based</span>
                            </div>
                            <div className={styles.item}>
                                <img src={checkMark} alt="" />
                                <span className={styles.item__text}>Real-time</span>
                            </div>
                            <div className={styles.item}>
                                <img src={checkMark} alt="" />
                                <span className={styles.item__text}>Collaborative</span>
                            </div>
                        </div>
                        <div className={styles.intro__button}>
                            <a href="#">
                                <button className={styles.blueButton}>Get started — it’s free</button>
                            </a>
                        </div>
                        <div className={styles.intro__button}>
                            <button className={styles.button}>Press and drag to orbit</button>
                        </div>
                    </div>
                </div>
                <Spline className={styles.spline_background} scene="https://prod.spline.design/yknoM7X9-OqkJF0J/scene.splinecode" />
            </section>
            {/* ---EXPLORE--- */}
            <section className={styles.explore}>
                <div className={styles.container}>
                    <h2 className={styles.headline}>Explore the latest examples</h2>
                    <h3 className={styles.subtitle}>Try remixing a scene by opening it.</h3>
                    <div className={styles.library}>
                        <a className={styles.libraryItems} href="#">
                            <div className={styles.image}>
                                <img className={styles.exampleImg} src={firstExample} alt="" />
                            </div>
                            <span>Interactive 3D Experience</span>
                        </a>
                        <a className={styles.libraryItems} href="#">
                            <div className={styles.image}>
                                <img className={styles.exampleImg} src={secondExample} alt="" />
                            </div>
                            <span>3D Text</span>
                        </a>
                        <a className={styles.libraryItems} href="#">
                            <div className={styles.image}>
                                <img className={styles.exampleImg} src={thirdExample} alt="" />
                            </div>
                            <span>3D iPhone Mockup</span>
                        </a>
                        <a className={styles.libraryItems} href="#">
                            <div className={styles.image}>
                                <img className={styles.exampleImg} src={fourthExample} alt="" />
                            </div>
                            <span>Game Controls & Physics</span>
                        </a>
                        <a className={styles.libraryItems} href="#">
                            <div className={styles.image}>
                                <img className={styles.exampleImg} src={fifthExample} alt="" />
                            </div>
                            <span>3D Character Design</span>
                        </a>
                    </div>
                    <div className={styles.examplesBtn}>
                        <a href="#" className={[styles.button, styles.first].join(' ')}>
                            <span className={styles.button__link} href="#">See all examples</span>
                        </a>
                    </div>
                </div>
            </section>
            {/* ---VIDEO--- */}
            <section className={styles.video}>
                <div className={styles.container}>
                    <h2 className={styles.headline}>Designing in 3D has never been easier</h2>
                    <h3 className={styles.subtitle}>Create 3D scenes, edit materials, and model 3D objects. Control the outcome of your design work.</h3>
                    <div className={styles.videoInner}>
                        <video className={styles.videoItem} autoPlay playsInline muted loop src={Video}></video>
                    </div>
                </div>
            </section>
            {/* ---TOOLS--- */}
            <section className={styles.tools}>
                <div className={styles.container}>
                    <h2 className={styles.headline}>Tools to express your creativity</h2>
                    <h3 className={styles.subtitle}>3D opens a new door for creativity. A solid set of features that will help you create your best designs.</h3>
                    <div className={styles.toolsInner}>
                        <div className={styles.toolsItem}>
                            <img className={styles.toolsImg} src={tools1} alt="" />
                            <span className={styles.text}>Realtime Collaboration</span>
                            <p className={styles.description}>Work with your team in real-time and set individual permissions.</p>
                        </div>
                        <div className={styles.toolsItem}>
                            <img className={styles.toolsImg} src={tools2} alt="" />
                            <span className={styles.text}>3D Modeling</span>
                            <p className={styles.description}>Parametric objects, polygonal editing, and more.</p>
                        </div>
                        <div className={styles.toolsItem}>
                            <img className={styles.toolsImg} src={tools3} alt="" />
                            <span className={styles.text}>Animation</span>
                            <p className={styles.description}>Give life to your 3d objects.</p>
                        </div>
                        <div className={styles.toolsItem}>
                            <img className={styles.toolsImg} src={tools4} alt="" />
                            <span className={styles.text}>Interactive Experiences</span>
                            <p className={styles.description}>Enable interactivity on your objects.</p>
                        </div>
                        <div className={styles.toolsItem}>
                            <img className={styles.toolsImg} src={tools5} alt="" />
                            <span className={styles.text}>Materials</span>
                            <p className={styles.description}>Control the look of your scene.</p>
                        </div>
                        <div className={styles.toolsItem}>
                            <img className={styles.toolsImg} src={tools6} alt="" />
                            <span className={styles.text}>3D Sculpting</span>
                            <p className={styles.description}>Create organic shapes.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* ---TOOLS MORE--- */}
            <section className={styles.sectionMore}>
                <div className={styles.container}>
                    <h2 className={styles.headline}>And there is more!</h2>
                    <h3 className={styles.subtitle}>Spline is constantly growing just like the possibilities of what you can achieve.</h3>
                    <div className={styles.toolsInner}>
                        <div className={[styles.toolsItem, styles.toolsMoreItem].join(' ')}>
                            <div className={styles.toolImg}>
                                <img className={[styles.toolsImg, styles.toolsMoreImg].join(' ')} src={toolsMore1} alt="" />
                            </div>
                            <span className={styles.text}>Teams, Projects & Folders</span>
                            <p className={[styles.description, styles.descriprionSmall].join(' ')}>Create teams and organize your files in folders and projects.</p>
                        </div>
                        <div className={[styles.toolsItem, styles.toolsMoreItem].join(' ')}>
                            <div className={styles.toolImg}>
                                <img className={[styles.toolsImg, styles.toolsMoreImg].join(' ')} src={toolsMore2} alt="" />
                            </div>
                            <span className={styles.text}>Image Exports</span>
                            <p className={[styles.description, styles.descriprionSmall].join(' ')}>Save your composition in high resolution JPGs & PNGs.</p>
                        </div>
                        <div className={[styles.toolsItem, styles.toolsMoreItem].join(' ')}>
                            <div className={styles.toolImg}>
                                <img className={[styles.toolsImg, styles.toolsMoreImg].join(' ')} src={toolsMore3} alt="" />
                            </div>
                            <span className={styles.text}>Polygonal Modeling</span>
                            <p className={[styles.description, styles.descriprionSmall].join(' ')}>Model any type of objects with a range of different tools.</p>
                        </div>
                        <div className={[styles.toolsItem, styles.toolsMoreItem].join(' ')}>
                            <div className={styles.toolImg}>
                                <img className={[styles.toolsImg, styles.toolsMoreImg].join(' ')} src={toolsMore4} alt="" />
                            </div>
                            <span className={styles.text}>React Export</span>
                            <p className={[styles.description, styles.descriprionSmall].join(' ')}>Quickly integrate your scene into your React projects.</p>
                        </div>
                        <div className={[styles.toolsItem, styles.toolsMoreItem].join(' ')}>
                            <div className={styles.toolImg}>
                                <img className={[styles.toolsImg, styles.toolsMoreImg].join(' ')} src={toolsMore5} alt="" />
                            </div>
                            <span className={styles.text}>Material Assets</span>
                            <p className={[styles.description, styles.descriprionSmall].join(' ')}>Stay organized with assets, including textures and colors.</p>
                        </div>
                        <div className={[styles.toolsItem, styles.toolsMoreItem].join(' ')}>
                            <div className={styles.toolImg}>
                                <img className={[styles.toolsImg, styles.toolsMoreImg].join(' ')} src={toolsMore6} alt="" />
                            </div>
                            <span className={styles.text}>Templates Library</span>
                            <p className={[styles.description, styles.descriprionSmall].join(' ')}>A repository of scenes, templates, and objects ready to use.</p>
                        </div>
                        <div className={[styles.toolsItem, styles.toolsMoreItem].join(' ')}>
                            <div className={styles.toolImg}>
                                <img className={[styles.toolsImg, styles.toolsMoreImg].join(' ')} src={toolsMore7} alt="" />
                            </div>
                            <span className={styles.text}>Vector Editing</span>
                            <p className={[styles.description, styles.descriprionSmall].join(' ')}>The vector tool you already know but in the 3D space.</p>
                        </div>
                        <div className={[styles.toolsItem, styles.toolsMoreItem].join(' ')}>
                            <div className={styles.toolImg}>
                                <img className={[styles.toolsImg, styles.toolsMoreImg].join(' ')} src={toolsMore8} alt="" />
                            </div>
                            <span className={styles.text}>Camera Controls</span>
                            <p className={[styles.description, styles.descriprionSmall].join(' ')}>Use cameras to control your scene composition.</p>
                        </div>
                        <div className={[styles.toolsItem, styles.toolsMoreItem].join(' ')}>
                            <div className={styles.toolImg}>
                                <img className={[styles.toolsImg, styles.toolsMoreImg].join(' ')} src={toolsMore9} alt="" />
                            </div>
                            <span className={styles.text}>Web Browser Events</span>
                            <p className={[styles.description, styles.descriprionSmall].join(' ')}>Create 3D animations and interactions with mouse/touch events.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* --- 3D --- */}
            <section className={styles.cube}>
                <div className="container">
                    <h2 className={styles.headline}>Integrate your 3D designs with your pipeline</h2>
                    <h3 className={styles.subtitle}>Get your 3D scenes inside your web projects using simple embed code/snippets.</h3>
                    <div className={styles.cubeInner}>
                        <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
                        <p className={styles.descriptionCube}>Drag the cube to interact with it</p>
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
                    </div>
                </div>
            </section>
            {/* ---DOWLOAD--- */}
            <section className={styles.dowload}>
                <div className={styles.container}>
                    <h2 className={styles.headline}>Get Spline Now</h2>
                    <h3 className={styles.subtitle}>We would love to see what you can build with Spline! Please tag us on Twitter or Instagram with your work.</h3>
                    <div className={styles.links}>
                        <button className={styles.linkDowload} type="button">Browser</button>
                        <button className={styles.linkDowload} type="button">macOS (m1)</button>
                        <button className={styles.linkDowload} type="button">macOS (intel)</button>
                        <button className={styles.linkDowload} type="button">Windows</button>
                    </div>
                </div>
            </section>
            {/* ---CONTACT--- */}
            <section className={styles.contact}>
                <div className={styles.container}>
                    <h2 className={styles.headline}>We are starting (and hiring!) 🤓</h2>
                    <h3 className={styles.subtitle}>Feel free to reach out if you need help or you want to connect! Also, if you are a Developer or Designer and you want to get involved, write us at:</h3>
                    <div className={styles.links}>
                        <button className={[styles.linkDowload, styles.email].join(' ')} type="button">💌 hello@spline.design</button>
                        <button className={[styles.linkDowload, styles.email].join(' ')} type="button">🖐 help@spline.design</button>
                        <button className={[styles.linkDowload, styles.email].join(' ')} type="button">👩‍💻 jobs@spline.design</button>
                    </div>
                    <div className={styles.links}>
                        <button className={[styles.linkDowload, styles.socials].join(' ')} type="button">🐦Twitter</button>
                        <button className={[styles.linkDowload, styles.socials].join(' ')} type="button">🌈 Instagram</button>
                        <button className={[styles.linkDowload, styles.socials].join(' ')} type="button">🔴 YouTube</button>
                        <button className={[styles.linkDowload, styles.socials].join(' ')} type="button">🎨 Tiktok</button>
                        <button className={[styles.linkDowload, styles.socials].join(' ')} type="button">🟣 Discord</button>
                    </div>
                </div>
            </section>
            {/* ---FOOTER--- */}
            <Footer />
        </>
    )
};