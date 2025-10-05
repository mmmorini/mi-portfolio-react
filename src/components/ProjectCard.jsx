function ProjectCard({ image, title, description, tech }) {
    return (
        <div className="projects-card">
            <div className="projects-img">
                <img src={image} />
                <div className="projects-buttons">
                  <button className="projects-deploy">Deploy en vivo</button>
                  <button className="projects-github">GitHub</button>
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