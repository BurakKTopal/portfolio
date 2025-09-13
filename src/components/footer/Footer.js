import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
    const currentYear = new Date().getFullYear(); // Get current year

    return (
        <footer className="footer-style">
            <div className="footer-content">
                <p>© 2024-{currentYear} Burak Kucuktopal. All rights reserved.</p>
                <div className="social-icons">
                    <a
                        href="https://www.linkedin.com/in/burak-kucuktopal/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="icon" />
                    </a>
                    <a
                        href="https://github.com/BurakKTopal"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="icon" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
