import React from 'react';
import './ContactMeButton.css';
import { scrollToSection } from "../navbar/Navbar";

const ContactMeButton = ({ targetSectionId }) => {
    const handleClick = (e) => {
        e.preventDefault();
        scrollToSection(targetSectionId);
    };

    return (
        <button className="contact-me-button" onClick={handleClick}>
            ?
        </button>
    );
};

export default ContactMeButton;