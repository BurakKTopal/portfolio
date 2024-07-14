import React, { useState, useEffect } from "react";
import './Home.css'
import Notepad from "../../components/notepad/Notepad";
import Navbar from "../../components/navbar/Navbar";
import ContactForm from "../../components/contactForm/ContactForm";
import { notepadsAboutMe, notepadsPhysics, notepadsMath, notepadsProgramming, notepadsProfessionalLife } from "../../data/notepadsHome.js"
import { mathAndPhysicsIntroContent } from "../../data/notepadsHome.js"
import Node from "../../utils/Node.js";
import isMobile from "../../utils/UseMobileCheck.js";
import Heading from "../../components/heading/Heading.js";
import FadeInSection from "../../UI/fadeInSection/FadeInSection.js";

function Home() {

  const [isVisible, setIsVisible] = useState(false);
  const [currentNotepadAboutMe, setCurrentNotepadAboutMe] = useState(notepadsAboutMe.head)
  const [currentNotepadPhysics, setCurrentNotepadPhysics] = useState(notepadsPhysics.head)
  const [currentNotepadMathematics, setCurrentNotepadMathematics] = useState(notepadsMath.head)
  const [currentNotepadProgramming, setCurrentNotepadProgramming] = useState(notepadsProgramming.head)
  const [currentNotepadProfessionalLife, setCurrentNotepadProfessionalLife] = useState(notepadsProfessionalLife.head)
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [quoteFinished, setQuoteFinished] = useState(false)
  useEffect(() => {
    setIsVisible(true); // For fade in effect
    setIsMobileDevice(isMobile()); // Check if the device is mobile when component mounts

  }, []);

  const makeNotepadAndAssignSetFunction = (currentNotepad, setFunction) => {
    const { id, title, textContent, otherContent, button, datePeriod } = currentNotepad.getValue();
    return <Notepad
      id={id}
      title={title}
      textContent={textContent}
      otherContent={otherContent}
      button={button}
      setFunction={setFunction} // To change the current notepad that is shown from the child
      currentNode={currentNotepad} // Reading the current notepad to conditionally add buttons to go back or forth
      datePeriod={datePeriod}
    />
  }

  const mathAndPhysicsContent = <>
    <div className="notepad-math-physics">
      {makeNotepadAndAssignSetFunction(currentNotepadMathematics, setCurrentNotepadMathematics)}
      {makeNotepadAndAssignSetFunction(currentNotepadPhysics, setCurrentNotepadPhysics)}
      {/* Adding maybe later bachelor thesis too */}
    </div>
  </>

  const notepadMathAndPhysics = new Node({ id: "mathAndPhysics", title: "Bachelor's degree(s)", textContent: mathAndPhysicsIntroContent, otherContent: mathAndPhysicsContent, button: false, datePeriod: '2021-2024' })


  const currentNotepads = [
    currentNotepadAboutMe.getValue(),
    notepadMathAndPhysics.getValue(),
    [currentNotepadMathematics.getPrevNode() ? { title: "Mathematics", id: "" } : { title: "Mathematics", id: "mathematics" }],
    [currentNotepadMathematics.getPrevNode() ? [currentNotepadMathematics.getValue()] : ''],
    [currentNotepadPhysics.getPrevNode() ? { title: "Physics", id: "" } : { title: "Physics", id: "physics" }],
    [currentNotepadPhysics.getPrevNode() ? [currentNotepadPhysics.getValue()] : ''],
    // currentNotepadProgramming.getValue(),
    // currentNotepadProfessionalLife.getValue(),
  ]


  return (
    <>

      <title>Home</title>
      <Heading setQuoteFinished={setQuoteFinished} />
      <body className={`fade-in ${isVisible ? 'visible' : ''}`}>
        <div className={`fade-in-after-quote ${quoteFinished ? 'after-quote-visible' : ''}`}>
          {isMobileDevice ? <></> : <Navbar notepads={currentNotepads} />}
        </div>
        <br></br>

        <div className="notepads-style">
          {makeNotepadAndAssignSetFunction(currentNotepadAboutMe, null)}
          {makeNotepadAndAssignSetFunction(notepadMathAndPhysics, null)}
          {/* {makeNotepadAndAssignSetFunction(currentNotepadProgramming, setCurrentNotepadProgramming)} */}
          {/* {makeNotepadAndAssignSetFunction(currentNotepadProfessionalLife, setCurrentNotepadProfessionalLife)} */}

        </div>

        <ContactForm />

      </body >
    </>
  );
}

export default Home;