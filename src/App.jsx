import { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import Background from './components/Background';
import './index.css';

function App() {
  useEffect(() => {
    // Scroll reveal logic
    const elements = document.querySelectorAll(".animate-left, .animate-right, .animate-up");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-active");
            } else {
                entry.target.classList.remove("animate-active");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));

    // Nav active link logic
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === entry.target.id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, { threshold: 0.6 });

    sections.forEach(section => navObserver.observe(section));

    return () => {
      elements.forEach(el => observer.unobserve(el));
      sections.forEach(section => navObserver.unobserve(section));
    };
  }, []);

  return (
    <ParallaxProvider>
      <Background />
      <ThemeToggle />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </ParallaxProvider>
  )
}

export default App;
