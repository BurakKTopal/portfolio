import React, { useState } from "react";
import { scrollToSection } from "../navbar/Navbar";
import './DropdownMenu.css';

const symbols = [
    '▪', '•', '◦', '▪', '▫', '★', '☆', '✓', '✗', '→',
    '⇒', '☐', '⚫', '⚪', '✦', '❖', '➤', '➜',
    '✽', '☛', '➔', '➢',
    '❯', '▶', '➤', '➣', '➥'
];

const DropdownMenu = ({ notepads }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const constituteMenu = (notepads, depth = 0) => {
        return (
            <ul>
                {notepads.map((notepad, index) =>
                    Array.isArray(notepad) ? (
                        <div className="sub-section" key={index}>
                            {constituteMenu(notepad, depth + 1) /* Recursively calling the inner parts */}
                        </div>
                    ) : (
                        <li key={notepad.id}>
                            {notepad.id ? (
                                <a
                                    href={`#${notepad.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(notepad.id);
                                    }}
                                >
                                    {notepad.title ? ` ${notepad.title}` : ''}
                                </a>
                            ) : (
                                <a
                                    style={{
                                        textDecoration: 'none' // To disable the underlining of subsections when having subsubsections
                                    }}
                                >
                                    {notepad.title ? `${notepad.title}` : ''}
                                </a>
                            )}
                        </li>
                    )
                )}
            </ul>
        );
    };

    return (
        <div className="dropdown-menu">
            <button onClick={toggleDropdown} className="dropdown-button">
                &#9776; {/* This is the hamburger icon */}
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    {constituteMenu(notepads)}
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
