import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import './PlotGrades.css'; // Import your CSS file
import CourseDetails from '../courseDetails/CourseDetails';
import { useAtom } from 'jotai';
import { getAdditionalLayout } from './plotGradesLayout';
import { themeAtom } from '../../styles/themeAtom';


function PlotGrades({ gradesData }) {
    /*
    signature: props = {key: course[str], value: grade[num]}
    */
    const [currentSemesterNumber, setCurrentSemesterNumber] = useState(null); // Semester not defined at beginning
    const [courses, setCourses] = useState([]);
    const [grades, setGrades] = useState([]);
    const [xValues, setXValues] = useState([]);
    const [courseDescriptionClicked, setCourseDescriptionClicked] = useState(false)
    const [theme] = useAtom(themeAtom)
    const gradesWholeYear = gradesData[0].concat(gradesData[1]);

    useEffect(() => {

        setHoverText('')
        if (currentSemesterNumber === null) {
            // If current semester number is null, then we show whole year

            setCourses(gradesWholeYear.map(element => element.subject));
            setGrades(gradesWholeYear.map(element => element.grade))
        } else {
            setCourses(gradesData[currentSemesterNumber].map(element => element.subject));
            setGrades(gradesData[currentSemesterNumber].map(element => element.grade));
        }

    }, [currentSemesterNumber, gradesData]);

    useEffect(() => {
        setCourseDescriptionClicked(false)
        setXValues(generateRangeArray(courses.length));
    }, [courses]);

    function generateRangeArray(n) {
        // Generate an array from 1 to n
        return Array.from({ length: n }, (_, index) => index + 1);
    }

    const [hoverText, setHoverText] = useState(null);

    const data = [
        {
            x: xValues,
            y: grades,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: theme === 'light-theme' ? 'blue' : 'green' },
            text: courses, // Text to display on hover
        }
    ];



    const layout = {
        title: `Grades During ${currentSemesterNumber != null ? `Semester ${currentSemesterNumber + 1}` : "the Year"}`,
        ...getAdditionalLayout(theme)
    };



    const handlePlotClick = (event) => {
        if (event.points.length > 0) {
            setCourseDescriptionClicked(true)
            const text = event.points[0].text; // Extracting text from the clicked point
            console.log(gradesWholeYear.filter(element => (element.subject === text)))
            const courseElement = gradesWholeYear.filter(element => (element.subject === text))[0]
            setHoverText(<CourseDetails title={courseElement.subject} creditPoints={courseElement.credits} grade={courseElement.grade}
                description={courseElement.description} setCourseDescriptionClicked={setCourseDescriptionClicked} />); // Set the text to display

        }
    };

    const renderPlot = () => {
        if (courseDescriptionClicked) {
            return (<div>
                {hoverText}
            </div>)
        } else {
            return (
                <>
                    <div className="plot-grades-container">
                        <Plot
                            data={data}
                            layout={layout}
                            style={{ width: '100%', height: '400px', margin: '0px' }}
                            className="plot-grades"
                            onClick={handlePlotClick} // Attach the click event handler
                        />
                        <p>
                            <span className="plot-grades-text">
                                Tap on the dots to see more information about each course.
                            </span>
                        </p>
                    </div>

                    <div className="semester-button-container">
                        <button className="semester-button" onClick={() => setCurrentSemesterNumber(0)}>Sem 1</button>
                        <button className="semester-button" onClick={() => setCurrentSemesterNumber(1)}>Sem 2</button>
                        <button className="semester-button" onClick={() => setCurrentSemesterNumber(null)}>Whole year</button>
                    </div>

                </>
            )
        }
    }
    return (
        <>
            {renderPlot()}

        </>
    );
}

export default PlotGrades;
