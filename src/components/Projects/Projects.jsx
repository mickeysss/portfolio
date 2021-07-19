import React from 'react';
import styles from './Projects.module.css'
import { state } from '../../state';
import ProjectsSlider from './ProjectsSlider';


const Projects = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>Проекты</h1>
                <ProjectsSlider slides={state}/>
            </div>
        </div>
    );
}

export default Projects;
