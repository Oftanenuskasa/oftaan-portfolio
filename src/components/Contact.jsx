/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Send email using EmailJS
      emailjs.send('service_r8zjfmy', 'template_yenlgl8', formData, 'istWsLUr1dobLcgcr')
  .then(() => {
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  }, (error) => {
    console.error('Failed to send message:', error.text);
    alert('Failed to send message, please try again.');
  });
    }
  };

  return (
    <div className="bg-Dark pink text-black py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 mt-8 transition-transform duration-300 hover:scale-105 hover:text-green-400'>
                <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                <a href="mailto:oftanenuskasa@gmail.com" className='hover:underline'>
               oftanenuskasa@gmail.com
                </a>
            </div>
            <div className='mb-4 transition-transform duration-300 hover:scale-105 hover:text-green-400'>
                <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                <span>+251926797020</span>
            </div>
            <div className='mb-4 transition-transform duration-300 hover:scale-105 hover:text-green-400'>
                <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                <span>Ginchi, Dendi, Oromia, Ethiopia</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4' onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className='block mb-2'>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none 
                  focus:border-green-400 ${errors.name ? 'border-red-500' : ''}`}
                  placeholder='Enter Your Name'
                />
                {errors.name && <span className="text-red-500">{errors.name}</span>}
              </div>
              <div>
                <label htmlFor="email" className='block mb-2'>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none 
                  focus:border-green-400 ${errors.email ? 'border-red-500' : ''}`}
                  placeholder='Enter Your Email'
                />
                {errors.email && <span className="text-red-500">{errors.email}</span>}
              </div>
              <div>
                <label htmlFor="message" className='block mb-2'>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none 
                  focus:border-green-400 ${errors.message ? 'border-red-500' : ''}`}
                  rows="5"
                  placeholder='Enter Your Message'
                />
                {errors.message && <span className="text-red-500">{errors.message}</span>}
              </div>
              <button
                type="submit"
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
