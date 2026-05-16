import { useState } from 'react';

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <header>
            <nav>
                <div className="nav-inner animate-down">
                    <img src="/plogo.png" alt="Logo" className="logo" />

                    {/* Navigation Links */}
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                    {/* Hamburger Menu (mobile) */}
                    <div className="menu-icon" onClick={toggleMenu}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${menuActive ? 'active' : ''}`} id="mobileMenu">
                <span className="close-btn" onClick={toggleMenu}>&times;</span>
                <a href="#home" onClick={toggleMenu}>Home</a>
                <a href="#about" onClick={toggleMenu}>About</a>
                <a href="#skills" onClick={toggleMenu}>Skills</a>
                <a href="#projects" onClick={toggleMenu}>Projects</a>
                <a href="#contact" onClick={toggleMenu}>Contact</a>
            </div>
        </header>
    );
};

export default Header;
