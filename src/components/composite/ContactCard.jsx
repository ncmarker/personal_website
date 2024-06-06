import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactCard.scss';
import TextInput from '../common/TextInput.jsx'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    emailjs.send('service_mbx7pkn', 'template_8zeimka', templateParams, 'yHYqOOSKeihUMTMP1')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Email sent successfully!');
      })
      .catch((err) => {
        console.error('Failed to send email. Error:', err);
        alert('Failed to send email. Please try again later.');
      });

    // Reset form
    setFormData({
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-card mx-auto flex flex-col gap-[50px]">
      <h4 className="title">Let's get in touch!</h4>
      <form onSubmit={handleSubmit} className="contact-form flex flex-col gap-8">
        <div className="flex items-start gap-4 flex-col md:flex-row md:justify-between">
          <TextInput 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
            size="short"
          />
          <TextInput 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            value={formData.subject} 
            onChange={handleChange} 
            size="short"
          />
        </div>
        <TextInput 
          className=""
          type="text" 
          name="message" 
          placeholder="Message" 
          value={formData.message} 
          onChange={handleChange} 
          size="long"
        />
        <div className="flex justify-end">
          <button className="submit-btn paragraph rounded-full cursor-pointer inline-flex items-center text-white" type='submit'>Send</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
