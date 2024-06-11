import React from 'react'
import { getImageUrl } from '../../utlis'
import skills from "../../data/skills.json"
import styles from "./skills.module.css"


const Experience = () => {
  return (
    <section  className= {styles.container} id="skills"> 
    <h2 className={styles.title}>Skills</h2>
    <div className={styles.content}>
    <div className={styles.skills}>
        {skills.map((skill,id) => {
            return (
                <div key={id} className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                        <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                        </div>
                        <p>{skill.title}</p>
                        </div>
            );
        })}
    </div>
    <ul></ul>
    </div>
    </section>
  )
}

export default Experience
