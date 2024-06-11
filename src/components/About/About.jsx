import React from 'react';
import { getImageUrl}  from '../../utlis';
import styles from "./About.module.css";


const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/Aboutimage.png")} alt=" Me with the laptop"  className={styles.aboutImage}/>
                <ul className={styles.aboutItems} >
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I'm a Frontend developer expertise in the Building responsive website</p>
                        </div>
                    </li>
                    {/* <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="server" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I'm a Backend developer expertise in the making Database website</p>
                        </div>
                    </li> */}
                    <li  className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="unilcon" />
                        <div className={styles.aboutItemText}>
                            <h3>Full Stack Developer</h3>
                            <p>Currently Working Toward To Become Expert in Full Stack Development</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About
