import React, { useState, useRef } from 'react';
import './ContactForm.css'; // Example CSS for styling
import Notepad from '../notepad/Notepad';
import emailjs from '@emailjs/browser';
import contactFromSuccessImage from '../../assets/images/contactFormSuccess.png';
import contactFromFailedImage from '../../assets/images/contactFormFailed.png';
import useScrollToHash from '../../hooks/useScrollToHash';

function ContactForm({ quoteFinished }) {

  useScrollToHash('contactMe', quoteFinished); // Scrolls to #contactMe after 1 second
  const form = useRef();
  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const [isFormSuccessfulSent, setIsFormSuccessfulSent] = useState(null)

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    console.log(formData)
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID,
      templateID,
      form.current, {
      publicKey: publicKey,
    })
      .then(
        () => {
          setIsFormSuccessfulSent(true)
          console.log('SUCCESS!');
        },
        (error) => {
          setIsFormSuccessfulSent(false)
          console.log('FAILED...', error.text);
        },
      );
    clearFields();
  };

  const clearFields = () => {
    setFormData({
      user_name: '',
      user_email: '',
      user_message: ''
    });
  }
  const renderForm = () => {
    return (
      <form ref={form} id="contactMe" className="contact-form" onSubmit={sendEmail}>
        <label htmlFor="user_name">Name</label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
          required
        />

        <label htmlFor="user_email">Email</label>
        <input
          type="email"
          id="user_email"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
          required
        />

        <label htmlFor="user_message">Message</label>
        <textarea
          id="user_message"
          name="user_message"
          value={formData.user_message}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    )
  }

  const ErrorPage = () => {
    return (
      <div className="error-container">
        <h1>Oops! Something went wrong.</h1>
        <img src={contactFromFailedImage} alt={"Error image"} className='error-image' />
        <p>We're sorry, but there was an error processing your request.</p>
        <p>Please try again later.</p>
      </div>
    );
  };


  const SuccessPage = () => {
    return (
      <div className="success-container">
        <img src={contactFromSuccessImage} alt={"Success image"} className='success-image' />
        <h1>Form Submitted Successfully!</h1>
        <p>Looking forward to meet you!</p>
      </div>
    );
  };

  const renderContactMe = () => {
    if (isFormSuccessfulSent == null) {
      return renderForm();
    }
    else if (isFormSuccessfulSent === false) {
      return ErrorPage();
    }
    else if (isFormSuccessfulSent === true) {
      return SuccessPage();
    }
  }


  return (
    <>
      <Notepad title={<h1 style={{ margin: "0px" }}>Want to get in touch?</h1>} otherContent={renderContactMe()} isInContentDiv={false} />
    </>
  );
}

export default ContactForm;