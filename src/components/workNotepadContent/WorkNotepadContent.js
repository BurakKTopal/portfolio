import React from 'react';
import './WorkNotepadContent.css'; // Import your CSS file for component-specific styles
import { themeAtom } from '../../styles/themeAtom';
import { useAtom } from 'jotai';

export default function WorkNotepadContent({ title, activity, location, skillSet, image, contentAboutExperience, invertInDarkMode, darkThemeImage }) {
    const [theme, setTheme] = useAtom(themeAtom);

    return (
        <>
            <div className='workpad-container' >
                <div className="work-notepad-content" style={{ margin: "0px" }}>


                    <div className="left-column" >
                        {darkThemeImage && theme == "light-theme" ?
                            <img
                                src={darkThemeImage}
                                className={`image-company ${invertInDarkMode ? "invertInDarkMode" : ""}`}
                                alt="Company Logo" /> :
                            <img
                                src={image}
                                className={`image-company ${invertInDarkMode ? "invertInDarkMode" : ""}`}
                                alt="Company Logo" />}
                    </div>


                    <div className="right-column" >
                        <h1 style={{ margin: "0px" }}>{title}</h1>
                        <div >
                            <p style={{ margin: "0px", fontSize: "1.2em", fontStyle: "italic" }}> {activity}</p>
                            <span style={{ fontSize: "1.1em" }}>
                                {location}
                            </span>
                        </div>
                    </div>
                </div>





                <div className='skill-set-and-description'>
                    <div className='keywords'>
                        <span style={{ fontWeight: "bold" }}>Skill set</span> - {skillSet}
                    </div>
                    <div className='separation'>
                        <h2>Description</h2>
                        <div className="content-about-experience">
                            {contentAboutExperience}
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
