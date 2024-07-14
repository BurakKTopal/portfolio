import React from "react";
import "./Footer.css"; // Import your CSS file for styling
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import Font Awesome icons

function Footer() {
    return (
        <footer className="footer-style">
            <div className="footer-content">
                <p>© 2024 Burak Kucuktopal. All rights reserved.</p>
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
