import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDark(true);
            document.body.classList.add('dark');
            document.body.classList.add('dark-theme');
        }
    }, []);

    const toggleTheme = (e) => {
        const checked = e.target.checked;
        setIsDark(checked);
        if (checked) {
            document.body.classList.add('dark');
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark');
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <div className="theme-toggle-wrapper">
            <label className="theme-switch">
                <input 
                    type="checkbox" 
                    className="theme-switch__checkbox" 
                    id="theme-checkbox"
                    checked={isDark}
                    onChange={toggleTheme}
                />
                <div className="theme-switch__container">
                    <div className="theme-switch__clouds"></div>
                    <div className="theme-switch__stars-container">★</div>
                    <div className="theme-switch__circle-container">
                        <div className="theme-switch__sun-moon-container">
                            <div className="theme-switch__moon">
                                <div className="theme-switch__spot"></div>
                                <div className="theme-switch__spot"></div>
                                <div className="theme-switch__spot"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </label>
        </div>
    );
};

export default ThemeToggle;
