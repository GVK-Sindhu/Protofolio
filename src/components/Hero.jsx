const Hero = () => {
    return (
        <section className="home" id="home">
            <div className="home-text animate-left">
                <h1>
                    <span>H</span><span>E</span><span>L</span><span>L</span><span>O</span><span>!</span>
                </h1>
                <h2>I'm G.V.K. Sindhu</h2>
                <p>A creative Full stack developer passionate about building professional, modern, and user-friendly web applications.</p>
                <div className="buttons">
                    <a href="https://drive.google.com/file/d/1jNtCmNibTD6qiavgwqasSWrY6PsOU4qT/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn">View Resume</a>
                    <a href="#contact" className="btn">Let's Talk</a>
                </div>
            </div>
            <div className="profile-card animate-right">
                <img src="/23A91A0595bg.png" alt="G.V.K. Sindhu - Full Stack Developer" />
                <h3>G.V.K. Sindhu</h3>
                <p className="role">Full Stack Developer</p>
                <p className="tagline">Dream. Develop. Deploy.</p>
                <a href="#projects" className="card-btn">View Projects</a>

                {/* Social Icons */}
                <div className="socials">
                    <a href="https://github.com/GVK-Sindhu" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/sindhu-gvk-481b33285/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="mailto:gvk.sindhul@gmail.com" title="Email">
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a href="https://leetcode.com/u/user8771vF/" target="_blank" rel="noopener noreferrer"><i className="fas fa-code"></i></a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
