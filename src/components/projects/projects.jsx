import React from 'react';
import projects from "../../data/projects.json";
import styles from "./projects.module.css"
import ProjectCard from './projectCard'; // Corrected component name to start with uppercase

const Projects = () => {
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.titles}>Projects</h2>
            <div className={styles.projects}>
                {projects.map((project, id) => ( // Changed variable name to 'project' for mapping
                    <ProjectCard key={id} project={project} /> // Corrected component name to start with uppercase
                ))}
            </div>
        </section>
    );
};

export default Projects;
