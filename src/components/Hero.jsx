/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import HeroImage from '../assets/oftaan.jpg'

const Hero = () => {
  return (
    <div className='bg-Dark pink text-black text-center py-16'>
        <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Oftanenus Kasa</span>
            , Front-End Developer
        </h1>
        <p className='mt-4 text-lg text-black-300'>
            I specialize in building modern and responsive web applications.
        </p>
        <div className='mt-8 space-x-4'>
            <button
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full ' onClick={() => window.location.href = 'mailto:nasisdereje@gmail.com'}>Contact With Me</button>
            <button
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' onClick={() => window.open('/MyCV.pdf', '_blank')}>My Resume</button>
        </div>

    </div>
  )
}

export default Hero