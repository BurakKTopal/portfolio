import React from "react"
import './ThemeSwitcher.css'
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome styles

export default function ThemeSwitcher({ theme, setTheme }) {
    const toggleTheme = () => {
        setTheme(theme === 'light-theme' ? 'dark-theme' : 'light-theme');
    };
    return (
        <>
            <button className="theme-switcher" onClick={toggleTheme}>
                {theme === 'light-theme' ? (
                    <><i className="fas fa-moon"></i> Dark Mode</>
                ) : (
                    <><i className="fas fa-sun"></i> Light Mode</>
                )}
            </button>
        </>
    )
}