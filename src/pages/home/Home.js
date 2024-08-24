import React, { useState, useEffect } from "react";
import './Home.css'
import Notepad from "../../components/notepad/Notepad";
import Navbar from "../../components/navbar/Navbar";
import ContactForm from "../../components/contactForm/ContactForm";
import { notepadsAboutMe, notepadsPhysics, notepadsMath, notepadsProgramming, notepadsProfessionalLife, notepadsExtraCurricular } from "../../data/notepadsHome.js"
import { mathAndPhysicsIntroContent } from "../../data/notepadsHome.js"
import Node from "../../utils/Node.js";
import isMobile from "../../utils/UseMobileCheck.js";
import Heading from "../../components/heading/Heading.js";
import Footer from "../../components/footer/Footer.js";
import ScrollDownButton from "../../components/scrollDownButton/ScrollDownButton.js";
import ContactMeButton from "../../components/contactMeButton/ContactMeButton.js";
import DropdownMenu from '../../components/dropdownMenu/DropdownMenu.js'

function Home() {

  const [isVisible, setIsVisible] = useState(false);
  const [currentNotepadAboutMe, setCurrentNotepadAboutMe] = useState(notepadsAboutMe.head)
  const [currentNotepadPhysics, setCurrentNotepadPhysics] = useState(notepadsPhysics.head)
  const [currentNotepadMathematics, setCurrentNotepadMathematics] = useState(notepadsMath.head)
  const [currentNotepadProgramming, setCurrentNotepadProgramming] = useState(notepadsProgramming.head)
  const [currentNotepadProfessionalLife, setCurrentNotepadProfessionalLife] = useState(notepadsProfessionalLife.head)
  const [currentNotepadExtraCurricular, setCurrentNotepadExtraCurricular] = useState(notepadsExtraCurricular.head)
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [quoteFinished, setQuoteFinished] = useState(false)
  const [quoteWithAuthorFinished, setQuoteWithAuthorFinished] = useState(false)
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
      quoteFinished={quoteWithAuthorFinished}
    />
  }

  const mathAndPhysicsContent = <>
    <div className="notepad-math-physics">
      {makeNotepadAndAssignSetFunction(currentNotepadMathematics, setCurrentNotepadMathematics)}
      {makeNotepadAndAssignSetFunction(currentNotepadPhysics, setCurrentNotepadPhysics)}
      {/* Adding maybe later bachelor thesis too */}
    </div>
  </>

  const notepadMathAndPhysics = new Node({ id: "education", title: "Bachelor's degree(s)", textContent: mathAndPhysicsIntroContent, otherContent: mathAndPhysicsContent, button: false, datePeriod: '2021-2024' })


  const currentNotepads = [
    currentNotepadAboutMe.getValue(),
    notepadMathAndPhysics.getValue(),
    [currentNotepadMathematics.getPrevNode() ? { title: "Mathematics", id: "" } : { title: "Mathematics", id: "mathematics" }],
    [currentNotepadMathematics.getPrevNode() ? [currentNotepadMathematics.getValue()] : ''],
    [currentNotepadPhysics.getPrevNode() ? { title: "Physics", id: "" } : { title: "Physics", id: "physics" }],
    [currentNotepadPhysics.getPrevNode() ? [currentNotepadPhysics.getValue()] : ''],
    currentNotepadProfessionalLife.getPrevNode() ? { title: "Work Experience", id: "" } : { title: "Work Experience", id: "professionallife" },
    currentNotepadProfessionalLife.getPrevNode() ? [currentNotepadProfessionalLife.getValue()] : '',
    currentNotepadProgramming.getPrevNode() ? { title: "Programming", id: "" } : { title: "Programming", id: "programming" },
    currentNotepadProgramming.getPrevNode() ? [currentNotepadProgramming.getValue()] : '',
    // currentNotepadExtraCurricular.getValue(),
    { title: 'Want to get in touch?', id: "contactMe" }
  ]



  const currentNotepadsSimplified = [
    currentNotepadAboutMe.getValue(),
    notepadMathAndPhysics.getValue(),
    currentNotepadProfessionalLife.getPrevNode() ? { title: "Work Experience", id: currentNotepadProfessionalLife.getValue().id } : { title: "Work Experience", id: "professionallife" },
    currentNotepadProgramming.getPrevNode() ? { title: "Programming", id: currentNotepadProgramming.getValue().id } : { title: "Programming", id: "programming" },
    currentNotepadExtraCurricular.getValue(),
    { title: 'Want to get in touch?', id: "contactMe" }
  ]



  return (
    <>

      <title>Home</title>
      <Heading setQuoteFinished={setQuoteFinished} setQuoteWithAuthorFinished={setQuoteWithAuthorFinished} />

      <body className={`fade-in ${isVisible ? 'visible' : ''}`}>
        <div className={`fade-in-after-quote ${quoteFinished ? 'after-quote-visible' : ''}`}>
          {isMobileDevice ? <DropdownMenu notepads={currentNotepadsSimplified} /> : <Navbar notepads={currentNotepads} />}
          <ScrollDownButton />

        </div>
        <div className="notepads-style">
          {makeNotepadAndAssignSetFunction(currentNotepadAboutMe, null)}
          {makeNotepadAndAssignSetFunction(notepadMathAndPhysics, null)}
          {makeNotepadAndAssignSetFunction(currentNotepadProfessionalLife, setCurrentNotepadProfessionalLife)}
          {makeNotepadAndAssignSetFunction(currentNotepadProgramming, setCurrentNotepadProgramming)}
          {makeNotepadAndAssignSetFunction(currentNotepadExtraCurricular, setCurrentNotepadExtraCurricular)}

        </div>
        <ContactMeButton targetSectionId="contactMe" />
        <ContactForm quoteFinished={quoteWithAuthorFinished} />
        <Footer />

      </body >
    </>
  );
}

export default Home;