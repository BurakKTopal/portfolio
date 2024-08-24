import React, { useState, useEffect } from "react";
import './Notepad.css'
import useScrollToHash from "../../hooks/useScrollToHash";


function scrollToSection(sectionId) {
    console.log(`SECTION ID: ${sectionId}`);
    const div = document.getElementById(`${sectionId}`); // # In front of each section id
    if (div) {
        console.log(`DIV FOUND:${div}`)
        div.scrollIntoView({ behavior: 'smooth' });
    }
}


function Notepad({ id, title, otherContent, textContent, button, setFunction, currentNode, datePeriod, quoteFinished }) {
    useScrollToHash(id, quoteFinished)
    const [mouseOver, setMouseOver] = useState(false)
    const [isFlipped, setIsFlipped] = useState(false);

    const handleMouseOver = () => {
        setMouseOver(true)
    }

    const handleMouseOut = () => {
        setMouseOver(false)
    }
    const timeout = 150 // For a smooth transition, we only change the content mid-way

    const handleLeftClick = () => {
        // Redirecting to link
        setIsFlipped(!isFlipped);

        setTimeout(() => {
            setFunction(currentNode => currentNode.getPrevNode()) // Going page back

        }, timeout);
    }

    const handleRightClick = () => {
        setIsFlipped(!isFlipped);

        setTimeout(() => {
            setFunction(currentNode => currentNode.getNextNode()) // Going page back
        }, timeout);
    }


    const renderButton = () => {
        if (button) {
            if (mouseOver) {
                return (
                    <div className="button-container">
                        {/* <span style={{fontSize:"1.2em"}}>Curious for more?</span> */}
                        {currentNode.getPrevNode() === null ? <div /> : <button className="left-button" onClick={handleLeftClick}></button>}

                        <div className={`${"title-style"} ${button ? "hasButton" : ""}`}>
                            <h2>{title}</h2>
                        </div>
                        {currentNode.getNextNode() === null ? <div /> : <button className="right-button" onClick={handleRightClick}></button>}
                    </div>)
            } else {
                return (
                    <div className="button-container">
                        {currentNode.getPrevNode() === null ? <div /> : <button className="left-button" onClick={handleLeftClick}></button>}
                        <div className={`${"title-style"} ${button ? "hasButton" : ""}`}>
                            <h2>{title}</h2>
                        </div>
                        {currentNode.getNextNode() === null ? <div /> : <button className="right-button" onClick={handleRightClick}></button>}
                    </div>
                )
            }
        }
        return (
            <div className="title-style with-padding hasNoButton">
                {title}
            </div>);
    }

    const renderTextContentDiv = () => {
        if (textContent) {
            return (
                <div className="content-style">
                    {textContent}
                </div>);
        }
    }

    return (
        <>
            <center>
                <div id={id} className={`container ${isFlipped ? 'flipped' : ''}`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <div id="inner-container" className={`${isFlipped ? 'flipped' : ''}`} >
                        {renderButton()}
                        {datePeriod ? <div className="date-container">
                            <span style={{ fontStyle: 'italic' }}> {datePeriod}</span>
                        </div> : <div />}
                        {renderTextContentDiv()}

                        {otherContent}

                    </div>
                </div>
            </center>
        </>
    );
}

export default Notepad;