const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                {/* Left Side: Photo */}
                <div className="about-photo animate-left">
                    <img src="/23A91A0595bg.png" alt="Your Photo" />
                </div>
                {/* Right Side: Text */}
                <div className="about-text animate-right">
                    <h2>About Me</h2>
                    <p>
                        I am a passionate and goal-oriented <strong style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>B.Tech Computer Science undergraduate</strong> at Aditya University with strong problem-solving skills, leadership experience, and creativity beyond academics. My aim is to turn ideas into visually stunning and meaningful experiences that impact real world. When I’m not designing, you’ll find me exploring new tech, reading design blogs, and learning creative tools to sharpen my skills.
                    </p>
                    <div className="about-buttons">
                        <a href="#contact" className="btn">Contact Me</a>
                        <a href="https://drive.google.com/file/d/1jNtCmNibTD6qiavgwqasSWrY6PsOU4qT/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn">Download CV</a>
                    </div>
                </div>
            </div>

            <h2 className="edu animate-up">Education Details</h2>

            <div className="timeline">
                <div className="timeline-item left animate-left">
                    <div className="dot"></div>
                    <div className="content">
                        <h3>Secondary School - 10th Grade</h3>
                        <h3>CBSE Board</h3>
                        <p>2020-2021</p>
                        <p>Jawahar Navodaya Vidyalaya (JNV) </p>
                        <p>Percentage:94%</p>
                    </div>
                </div>
                <div className="timeline-item right animate-right">
                    <div className="dot"></div>
                    <div className="content">
                        <h3>Senior Secondary - 12th Grade</h3>
                        <h3>CBSE Board</h3>
                        <p>2022-2023</p>
                        <p>Jawahar Navodaya Vidyalaya (JNV) </p>
                        <p>Percentage:80%</p>
                    </div>
                </div>
                <div className="timeline-item left highlight animate-left">
                    <div className="dot"></div>
                    <div className="content">
                        <h3>B.Tech (Computer Science and Engineering)</h3>
                        <p>2023-2027</p>
                        <p>Aditya Engineering College</p>
                        <p>CGPA:9.49</p>
                    </div>
                </div>
            </div>

            <div className="extras">
                <div className="box animate-up">
                    <h3>Hobbies</h3>
                    <ul>
                        <li style={{ color: '#0D1164', fontSize: '20px' }}><i className="fa-solid fa-chess"></i> &nbsp; Chess</li>
                        <li style={{ color: '#0D1164', fontSize: '20px' }}> <i className="fa-solid fa-palette"></i> &nbsp; Painting</li>
                        <li style={{ color: '#0D1164', fontSize: '20px' }}> <i className="fa-solid fa-paintbrush"></i> &nbsp; Handicrafts</li>
                        <li style={{ color: '#0D1164', fontSize: '20px' }}><i className="fa-solid fa-book"></i> &nbsp; Reading Blogs</li>
                        <li style={{ color: '#0D1164', fontSize: '20px' }}> <i className="fa-solid fa-file-pen"></i> &nbsp; Writing Articles</li>
                    </ul>
                </div>
                <div className="box animate-up">
                    <h3>Achievements</h3>
                    <ul>
                        <li style={{ color: '#0D1164', fontSize: '20px' }}><i className="fa-solid fa-award"></i> &nbsp; NCC Cadet</li>
                        <li style={{ color: '#0D1164', fontSize: '20px' }}><i className="fa-solid fa-trophy"></i>&nbsp; Reliance Foundation UG Scholar</li>
                        <li style={{ color: '#0D1164', fontSize: '20px' }}><i className="fa-solid fa-medal"></i> &nbsp;Navodaya Scholar</li>
                        <li style={{ color: '#0D1164', fontSize: '20px' }}><i className="fa-solid fa-trophy"></i>&nbsp; Vignan Jyothi Scholar</li>
                    </ul>
                </div>
                <div className="box animate-up">
                    <h3>Certifications</h3>
                    <ul>
                        <li style={{ color: '#0D1164', fontSize: '20px' }}><i className="fa-solid fa-award"></i>&nbsp;Red hat Certified System Administrator</li>
                        <li style={{ color: '#0D1164', fontSize: '20px' }}><i className="fa-solid fa-trophy"></i>&nbsp; Oracle Java Foundations Associate</li>
                        <li style={{ color: '#0D1164', fontSize: '20px' }}><i className="fa-solid fa-medal"></i> &nbsp;Cisco Academy - HTML,CSS,JS Essentials</li>
                        <li style={{ color: '#0D1164', fontSize: '20px' }}><i className="fa-solid fa-award"></i> &nbsp;RedHat Academy - Python Essentials</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
