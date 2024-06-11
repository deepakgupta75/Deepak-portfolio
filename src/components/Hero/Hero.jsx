import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utlis';

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hey, I'm Deepak</h1>
                <p className={styles.description}>
                    "As a frontend enthusiast, I've made some UI that people really like to use.Now, driven by passion, I'm eager to evolve into a Full Stack Developer,Mixing creativity with tech skills to create cool stuff for the digital world.</p>






                {/* <a href="https://rock-paper-scisoor.netlify.app/" download="resume.pdf" className={styles.contactBtn} >Download Resume</a> */}

            </div>
            <img src={getImageUrl("Hero/my.png")} alt="Hero image of me" className={styles.Heroimg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}

export default Hero
