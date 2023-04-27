import React, { useState } from "react";
import Spline from "@splinetool/react-spline";

import styles from "./home.module.css";

import { Footer, Explore, ToolsCard, ToolsMore, CodeView, DowloadButton } from "../../components/index";

// import images & video
import { checkMark, firstExample, secondExample, thirdExample, fourthExample, fifthExample, tools1, tools2, tools3, tools4, tools5, tools6, toolsMore1, toolsMore2, toolsMore3, toolsMore4, toolsMore5, toolsMore6, toolsMore7, toolsMore8, toolsMore9, web, dowload } from "../../assets/index";

import Video from "../../assets/video/1.mp4";

export const Home = () => {
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
                        <Explore image={firstExample} text={'Interactive 3D Experience'}/>
                        <Explore image={secondExample} text={'3D Text'}/>
                        <Explore image={thirdExample} text={'3D iPhone Mockup'}/>
                        <Explore image={fourthExample} text={'Game Controls & Physics'}/>
                        <Explore image={fifthExample}text={'3D Character Design'}/>
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
                        <ToolsCard image={tools1} 
                            text={"Realtime Collaboration"} 
                            description={"Work with your team in real-time and set individual permissions."}
                        />
                        <ToolsCard image={tools2} 
                            text={"3D Modeling"} 
                            description={"Parametric objects, polygonal editing, and more."}
                        />
                        <ToolsCard image={tools3} 
                            text={"Animation"} 
                            description={"Give life to your 3d objects"}
                        />
                        <ToolsCard image={tools4} 
                            text={"Interactive Experiences"} 
                            description={"Enable interactivity on your objects."}
                        />
                        <ToolsCard image={tools5} 
                            text={"Materials"} 
                            description={"Control the look of your scene."}
                        />
                        <ToolsCard image={tools6} 
                            text={"3D Sculpting"} 
                            description={"Create organic shapes"}
                        />
                    </div>
                </div>
            </section>
            {/* ---TOOLS MORE--- */}
            <section className={styles.sectionMore}>
                <div className={styles.container}>
                    <h2 className={styles.headline}>And there is more!</h2>
                    <h3 className={styles.subtitle}>Spline is constantly growing just like the possibilities of what you can achieve.</h3>
                    <div className={styles.toolsInner}>
                        <ToolsMore image={toolsMore1} text={"Teams, Projects & Folders"} description={"Create teams and organize your files in folders and projects."}/>
                        <ToolsMore image={toolsMore2} text={"Image Exports"} description={"Save your composition in high resolution JPGs & PNGs."}/>
                        <ToolsMore image={toolsMore3} text={"Polygonal Modeling"} description={"Model any type of objects with a range of different tools."}/>
                        <ToolsMore image={toolsMore4} text={"React Export"} description={"Quickly integrate your scene into your React projects."}/>
                        <ToolsMore image={toolsMore5} text={"Material Assets"} description={"Stay organized with assets, including textures and colors."}/>
                        <ToolsMore image={toolsMore6} text={"Templates Library"} description={"A repository of scenes, templates, and objects ready to use."}/>
                        <ToolsMore image={toolsMore7} text={"Vector Editing"} description={"The vector tool you already know but in the 3D space."}/>
                        <ToolsMore image={toolsMore8} text={"Camera Controls"} description={"Use cameras to control your scene composition."}/>
                        <ToolsMore image={toolsMore9} text={"Web Browser Events"} description={"Create 3D animations and interactions with mouse/touch events."}/>
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
                        <CodeView />
                    </div>
                </div>
            </section>
            {/* ---DOWLOAD--- */}
            <section className={styles.dowload}>
                <div className={styles.container}>
                    <h2 className={styles.headline}>Get Spline Now</h2>
                    <h3 className={styles.subtitle}>We would love to see what you can build with Spline! Please tag us on Twitter or Instagram with your work.</h3>
                    <DowloadButton
                        image={web} 
                        text={"Browser"}
                    />
                    <DowloadButton
                        image={dowload} 
                        text={"macOS (m1)"}
                    />
                    <DowloadButton
                        image={dowload} 
                        text={"macOS (intel)"}
                    />
                    <DowloadButton
                        image={dowload} 
                        text={"Windows"}
                    />
                </div>
            </section>
            {/* ---CONTACT--- */}
            <section className={styles.contact}>
                <div className={styles.container}>
                    <h2 className={styles.headline}>We are starting (and hiring!) 🤓</h2>
                    <h3 className={styles.subtitle}>Feel free to reach out if you need help or you want to connect! Also, if you are a Developer or Designer and you want to get involved, write us at:</h3>
                    <div className={styles.links}>
                        <button className={styles.email} type="button">💌 hello@spline.design</button>
                        <button className={styles.email} type="button">🖐 help@spline.design</button>
                        <button className={styles.email} type="button">👩‍💻 jobs@spline.design</button>
                    </div>
                    <div className={styles.links}>
                        <button className={styles.socials} type="button">🐦Twitter</button>
                        <button className={styles.socials} type="button">🌈 Instagram</button>
                        <button className={styles.socials} type="button">🔴 YouTube</button>
                        <button className={styles.socials} type="button">🎨 Tiktok</button>
                        <button className={styles.socials} type="button">🟣 Discord</button>
                    </div>
                </div>
            </section>
            {/* ---FOOTER--- */}
            <Footer />
        </>
    )
};