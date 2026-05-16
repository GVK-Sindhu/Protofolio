import { useEffect, useState } from "react";

const Skills = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const certs = [
        "htmlcerti.png",
        "csscerti.png",
        "jscerti.png",
        "pythoncerti.png",
        "redhatcerti.png",
        "javacerti.png",
        "sqlcerti.png"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % certs.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [certs.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % certs.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + certs.length) % certs.length);
    };

    return (
        <>
            <section className="skills-section" id="skills">
                <h2 className="animate-up">My Skills</h2>
                <div className="skills-grid">
                    <div className="skill-card animate-up">
                        <div className="skill-icon" style={{ color: '#E34F26' }}><i className="fab fa-html5"></i></div>
                        <div className="skill-name">HTML</div>
                        <div className="skill-level">
                            <div className="skill-progress" style={{ width: '90%' }}></div>
                        </div>
                        <div className="certificate">
                            <img src="/html.png" alt="HTML Certificate" />
                        </div>
                    </div>
                    <div className="skill-card animate-up">
                        <div className="skill-icon" style={{ color: '#1572B6' }}><i className="fa-brands fa-css3-alt"></i></div>
                        <div className="skill-name">CSS</div>
                        <div className="skill-level">
                            <div className="skill-progress" style={{ width: '90%' }}></div>
                        </div>
                        <div className="certificate">
                            <img src="/css.png" alt="CSS Certificate" />
                        </div>
                    </div>
                    <div className="skill-card animate-up">
                        <div className="skill-icon"><img width="50" height="50" src="/jsimg.png" alt="JS" /></div>
                        <div className="skill-name">JS</div>
                        <div className="skill-level">
                            <div className="skill-progress" style={{ width: '90%' }}></div>
                        </div>
                        <div className="certificate">
                            <img src="/js.png" alt="JS Certificate" />
                        </div>
                    </div>
                    <div className="skill-card animate-up">
                        <div className="skill-icon" style={{ color: '#61DAFB' }}><i className="fa-brands fa-react"></i></div>
                        <div className="skill-name">React</div>
                        <div className="skill-level">
                            <div className="skill-progress" style={{ width: '35%' }}></div>
                        </div>
                    </div>
                    <div className="skill-card animate-up">
                        <div className="skill-icon"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/c-plus-plus-logo.png" alt="C++ logo" /></div>
                        <div className="skill-name">C++</div>
                        <div className="skill-level">
                            <div className="skill-progress" style={{ width: '70%' }}></div>
                        </div>
                        <div className="certificate">
                            <img src="/c++.png" alt="C++ Certificate" />
                        </div>
                    </div>
                    <div className="skill-card animate-up">
                        <div className="skill-icon"><i className="fa-brands fa-java"></i></div>
                        <div className="skill-name">Java</div>
                        <div className="skill-level">
                            <div className="skill-progress" style={{ width: '80%' }}></div>
                        </div>
                        <div className="certificate">
                            <img src="/java.png" alt="Java Certificate" />
                        </div>
                    </div>
                    <div className="skill-card animate-up">
                        <div className="skill-icon"><i className="fa-brands fa-python"></i></div>
                        <div className="skill-name">Python</div>
                        <div className="skill-level">
                            <div className="skill-progress" style={{ width: '70%' }}></div>
                        </div>
                        <div className="certificate">
                            <img src="/python.png" alt="Python Certificate" />
                        </div>
                    </div>
                    <div className="skill-card animate-up">
                        <div className="skill-icon" style={{ color: 'rgb(89, 84, 84)' }}><i className="fa-solid fa-database"></i></div>
                        <div className="skill-name">SQL / Databases</div>
                        <div className="skill-level">
                            <div className="skill-progress" style={{ width: '95%' }}></div>
                        </div>
                        <div className="certificate">
                            <img src="/sql.png" alt="SQL Certificate" />
                        </div>
                    </div>
                    <div className="skill-card animate-up">
                        <div className="skill-icon"><i className="fa-brands fa-github"></i></div>
                        <div className="skill-name">Git / GitHub</div>
                        <div className="skill-level">
                            <div className="skill-progress" style={{ width: '85%' }}></div>
                        </div>
                        <div className="certificate">
                            <img src="/github.png" alt="GitHub Certificate" />
                        </div>
                    </div>
                    <div className="skill-card animate-up">
                        <div className="skill-icon" style={{ color: '#1572B6' }}><i className="fa-brands fa-bootstrap"></i></div>
                        <div className="skill-name">BOOTSTRAP</div>
                        <div className="skill-level">
                            <div className="skill-progress" style={{ width: '70%' }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications Carousel */}
            <section id="certifications">
                <h2 className="cert-heading animate-up">Certifications</h2>
                <div className="carousel animate-up">
                    <div 
                        className="carousel-track" 
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {certs.map((cert, index) => (
                            <div className="cert-card" key={index}>
                                <img src={`/${cert}`} alt={`Certificate ${index}`} />
                            </div>
                        ))}
                    </div>
                    <div className="carousel-buttons">
                        <button className="prev" onClick={prevSlide}>❮</button>
                        <button className="next" onClick={nextSlide}>❯</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;
