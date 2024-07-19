import React from 'react';
import './ProjectNotepadContent.css'; // Import your CSS file for component-specific styles

export default function ProjectNotepadContent({ skillSet, contentAboutProject, githubLink }) {

    return (
        <>
            <div className='project-container'>
                <div className='skill-set-and-description'>

                    <h2>Description</h2>
                    <div className="content-about-project">
                        {contentAboutProject}
                    </div>
                    <div className='separation' />
                    <br />
                    <div>
                        <span style={{ fontWeight: "bold" }}>Skills acquired</span> - {skillSet}
                    </div>
                    <br />
                    <center>
                        <a href={githubLink} className='github-button' target="_blank" rel="noopener noreferrer">
                            Github repo
                        </a>
                    </center>
                </div>
            </div>
        </>
    );
}


/* import React from 'react';
import './ProjectNotepadContent.css'; // Import your CSS file for component-specific styles

export default function ProjectNotepadContent({ skillSet, contentAboutProject, githubLink }) {

    return (
        <>
            <div className='workpad-container'>
                <div className="work-notepad-content">
                    <table>
                        <tr>
                            <td>
                                <div className='left-column'>
                                    <h3>Skills acquired</h3>
                                    <ul>
                                        {skillSet.map(skill => <li>{skill}</li>)}
                                    </ul>
                                </div>
                            </td>
                            <td>

                                <div className="right-column">
                                    <a href={githubLink} className='github-button' target="_blank" rel="noopener noreferrer">
                                        Github repo
                                    </a>
                                </div>
                            </td>
                        </tr>


                    </table>
                </div>
            </div>


            <div className='project-container'>
                <div className='skill-set-and-description'>
                    <h2 style={{ margin: "0px" }}>Description</h2>
                    <div className="content-about-project">
                        {contentAboutProject}
                    </div>
                    <br />

                </div>
            </div>
        </>
    );
}
 */