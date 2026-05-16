const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2 className="section-heading animate-up">Contact Me</h2>

            <div className="contact-card animate-up">
                <h3>Get in Touch</h3>
                <form>
                    <input type="text" placeholder="Enter Your Name" required />
                    <input type="email" placeholder="Enter Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>

                <div className="social-links">
                    <a href="https://www.linkedin.com/in/sindhu-gvk-481b33285/" target="_blank" rel="noopener noreferrer"> 
                        <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="https://github.com/GVK-Sindhu" target="_blank" rel="noopener noreferrer"> 
                        <i className="fab fa-github"></i> GitHub
                    </a>
                    <a href="mailto:gvk.sindhul@gmail.com">
                        <i className="fas fa-envelope"></i> Email
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
