import React from 'react';
import './WorkNotepadContent.css'; // Import your CSS file for component-specific styles
import { themeAtom } from '../../styles/themeAtom';
import { useAtom } from 'jotai';

export default function WorkNotepadContent({ title, location, skillSet, image, contentAboutExperience, invertInDarkMode, darkThemeImage }) {
    const [theme, setTheme] = useAtom(themeAtom);

    return (
        <>
            <div className='workpad-container'>
                <div className="work-notepad-content">


                    <table>
                        <tr>
                            <td>
                                <div className="left-column">
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
                            </td>
                            <td>

                                <div className="right-column">
                                    <h1>{title}</h1>
                                    <p>
                                        {location}
                                    </p>
                                </div>
                            </td>
                        </tr>


                    </table>




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
            </div>
        </>
    );
}
