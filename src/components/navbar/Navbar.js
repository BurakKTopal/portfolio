import React, { useState, useEffect } from "react";
import './Navbar.css'


function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

const symbols = [
  '▪', '•', '◦', '▪', '▫', '★', '☆', '✓', '✗', '→',
  '⇒', '☐', '⚫', '⚪', '✦', '❖', '➤', '➜',
  '✽', '☛', '➔', '➢',
  '❯', '▶', '➤', '➣', '➥'
];

function Navbar({ notepads }) {

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true); // Set state to true when component mounts
  }, []);

  const constituteNavbar = (notepads, depth = 0) => {
    return (<ul>
      {notepads.map((notepad, index) =>
        Array.isArray(notepad) ? (
          <div className="sub-section" >
            {constituteNavbar(notepad, depth + 1) /* Recursively calling the innner parts */}
          </div>
        ) : (
          <li key={notepad.id}>
            {notepad.id ? <a
              href={`#${notepad.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(notepad.id);
              }}
            >
              {notepad.title ? `${symbols[depth]}  ${notepad.title}` : ''}
            </a> :
              <a style={{
                textDecoration: 'none' // To disable the underlining of subsections when having subsubsections
              }}>{notepad.title ? `${notepad.title}` : ''}</a>}
          </li>
        )
      )}
    </ul>);
  };

  return (
    <>
      <nav className={`navbar`}>
        {constituteNavbar(notepads)}
      </nav>
    </>
  );
}

export default Navbar;