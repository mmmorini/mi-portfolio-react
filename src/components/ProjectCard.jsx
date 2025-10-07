function ProjectCard({ image, title, description, tech, deployUrl, githubUrl }) {
    return (
        <div className="projects-card">
            <div className="projects-img">
                <img src={image} />
                <div className="projects-buttons">
                    <a href={deployUrl} target="_BLANK" rel="noopener noreferrer">
                        <button className="projects-deploy">Deploy en vivo</button>
                    </a>
                    <a href={githubUrl} target="_BLANK" rel="noopener noreferrer">
                        <button className="projects-github">GitHub</button>
                    </a>
                </div>
            </div>
            <div className="projects-info">
                <h3 className="projects-title">{title}</h3>
                <p className="projects-subtitle">{description}</p>
                <p className="projects-tech">Se usó:</p>
                <div className="projects-icons-tech">
                    {tech.map((iconSrc, index) => (
                      <img key={index} src={iconSrc} alt="tech icon" />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;