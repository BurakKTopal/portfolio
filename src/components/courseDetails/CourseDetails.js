import React from "react";
import "./CourseDetails.css"; // Import the CSS file for styling

function CourseDetails({ creditPoints, title, grade, description, setCourseDescriptionClicked }) {
    const handleClose = () => {
        setCourseDescriptionClicked(false)
    };

    return (
        <div className="course-details">
            <div className="close-button-container">
                <button className="close-button" onClick={handleClose}>X</button>
            </div>
            <br />
            <table className="course-table">
                <thead>
                    <tr>
                        <th>ECTS</th>
                        <th>Course</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{creditPoints}</td>
                        <td>{title}</td>
                        <td>{`${grade}/20`}</td>
                    </tr>
                </tbody>
            </table>
            <div className="course-description">
                {description}
            </div>
        </div>
    );
}

export default CourseDetails;
