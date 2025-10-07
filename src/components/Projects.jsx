import "./Projects.css";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projectsData";


function Projects() {
    return (
        <section id="projects" className="projects-section">
            <h2>Mis proyectos</h2>
            <div className="projects-content">
                {projectsData.map((project, index) => (
                    <ProjectCard 
                        key = {index}
                        image = {project.image}
                        title = {project.title}
                        description = {project.description}
                        tech = {project.tech}
                        deployUrl = {project.deployUrl}
                        githubUrl = {project.githubUrl}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects;