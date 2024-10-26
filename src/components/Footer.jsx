// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault(); // Prevent page refresh
    if (email) {
      console.log(`Subscribed with email: ${email}`);
      // Here, you can also add functionality to send the email to your server or an API.
      setEmail(""); // Clear the input field after subscription
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Oftanenus</h3>
            <p className="text-gray-400">
              Front-End Developer based in Ethiopia, specializing in web and
              software development.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email"
                value={email} // Set input value to the state
                onChange={(e) => setEmail(e.target.value)} // Update state on input change
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Oftanenus Kasa. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a
              href="https://web.facebook.com/Oftanenuskasa/"
              className="text-blue-600 text-2xl transition-transform transform hover:scale-110 hover:text-blue-800"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/oftanenus-kasa-4692aa257/"
              className="text-blue-700 text-2xl transition-transform transform hover:scale-110 hover:text-blue-900"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://t.me/Oftanenuskasa"
              className="text-blue-400 text-2xl transition-transform transform hover:scale-110 hover:text-blue-600"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://github.com/Oftanenuskasa"
              className="text-gray-400 text-2xl transition-transform transform hover:scale-110 hover:text-white"
            >
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
