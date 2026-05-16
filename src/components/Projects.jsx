const Projects = () => {
    return (
        <section className="projects" id="projects">
            <h2 className="section-heading animate-up">My Projects</h2>
            <div className="projects-container">
                <div className="project-card animate-left">
                    <div className="project-img"><img src="/project1.png" alt="SkillMint Website" /></div>
                    <div className="project-info">
                        <h3>SkillMint Website</h3>
                        <div className="tech-stack">
                            <h5>Tech : </h5>
                            <span>HTML</span><span>CSS</span><span>JavaScript</span>
                        </div>
                        <p>It is Web Platform designed for students to get personalized learning by connecting their learning journey with placement opportunity</p>
                    </div>
                    <div className="overlay">
                        <h2>Skill Mint</h2>
                        <p>SkillMint is a student-focused platform that helps learners track their skills, certificates, and projects. It provides personalized insights and resources for career growth and placement readiness.</p>
                        <a href="https://github.com/GVK-Sindhu/SkillMint" target="_blank" rel="noopener noreferrer" className="btn-view"> View Project</a>
                    </div>
                </div>
                <div className="project-card animate-right">
                    <div className="project-img"><img src="/project2.png" alt="NoticeHub Website" /></div>
                    <div className="project-info">
                        <h3>NoticeHub Website</h3>
                        <div className="tech-stack">
                            <h5>Tech : </h5>
                            <span>HTML</span><span>CSS</span><span>JavaScript</span>
                        </div>
                        <p>It is Centralized Web portal where student can access information about latest exam updates,placement opportunities</p>
                    </div>
                    <div className="overlay">
                        <h2>Notice Hub</h2>
                        <p>NoticeHub is a centralized platform for managing and sharing important updates and announcements in an organized way. It ensures quick access with a clean interface.</p>
                        <a href="https://github.com/GVK-Sindhu/noticehub" target="_blank" rel="noopener noreferrer" className="btn-view"> View Project</a>
                    </div>
                </div>
                <div className="project-card animate-left">
                    <div className="project-img"><img src="/project3.png" alt="Portfolio Website" /></div>
                    <div className="project-info">
                        <h3>Portfolio Website</h3>
                        <div className="tech-stack">
                            <h5>Tech : </h5>
                            <span>HTML</span><span>CSS</span><span>JavaScript</span>
                        </div>
                        <p>A Personal portfolio showcasing skills, certifications, projects and achievements.</p>
                    </div>
                    <div className="overlay">
                        <h2>Portfolio</h2>
                        <p>My personal portfolio designed with modern animations and responsive layouts, highlighting my education, skills, certifications, and projects in an engaging way.</p>
                        <a href="https://github.com/GVK-Sindhu" target="_blank" rel="noopener noreferrer" className="btn-view"> View Project</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
