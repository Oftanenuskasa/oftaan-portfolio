// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import AboutImage from "../assets/oftaan.jpg";

const About = () => {
  const [skills, setSkills] = useState({
    htmlCss: 90,
    react: 85,
    node: 80,
  });

  const [tooltip, setTooltip] = useState({
    visible: false,
    percentage: 0,
    x: 0,
    y: 0,
    skill: null,
  });

  const [stats, setStats] = useState({
    experience: 3,
    projects: 50,
    clients: 10,
  });

  const handleClick = (e, stat) => {
    const elementWidth = e.currentTarget.offsetWidth;
    const clickX = e.clientX - e.currentTarget.getBoundingClientRect().left;

    // Click on the left half decreases, right half increases
    if (clickX < elementWidth / 2) {
      setStats((prevStats) => ({
        ...prevStats,
        [stat]: prevStats[stat] > 0 ? prevStats[stat] - 1 : 0,
      }));
    } else {
      setStats((prevStats) => ({
        ...prevStats,
        [stat]: prevStats[stat] + 1,
      }));
    }
  };

  const handleSkillClick = (skill) => (e) => {
    const barWidth = e.currentTarget.offsetWidth;
    const clickX = e.clientX - e.currentTarget.getBoundingClientRect().left;
    const newPercentage = Math.round((clickX / barWidth) * 100);

    setSkills((prevSkills) => ({
      ...prevSkills,
      [skill]: newPercentage,
    }));
  };

  const handleMouseMove = (e, skill) => {
    const barWidth = e.currentTarget.offsetWidth;
    const hoverX = e.clientX - e.currentTarget.getBoundingClientRect().left;
    const hoverPercentage = Math.round((hoverX / barWidth) * 100);

    setTooltip({
      visible: true,
      percentage: hoverPercentage,
      x: hoverX,
      y: e.clientY,
      skill,
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false, skill: null });
  };

  return (
    <div className="bg-gray text-black py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="Developer portrait"
            className="w-72 h-80 rounded-lg object-cover border-4 border-gray-500 mb-8 md:mb-0 
            transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:brightness-110"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
            </p>
            <div className="space-y-4">
              {Object.entries(skills).map(([skill, percentage]) => (
                <div className="flex items-center" key={skill}>
                  <label className="w-2/12">
                    {skill.charAt(0).toUpperCase() +
                      skill.slice(1).replace(/([A-Z])/g, " ")}
                  </label>
                  <div
                    className="grow bg-gray-800 rounded-full h-2.5 cursor-pointer relative"
                    onClick={handleSkillClick(skill)}
                    onMouseMove={(e) => handleMouseMove(e, skill)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                      transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    ></div>
                    {tooltip.visible && tooltip.skill === skill && (
                      <div
                        className="absolute bg-gray-800 text-white text-sm rounded px-2 py-1"
                        style={{
                          left: `${tooltip.x}px`,
                          bottom: "25px",
                          transform: "translateX(-50%)",
                        }}
                      >
                        {tooltip.percentage}%
                      </div>
                    )}
                  </div>
                  <span className="ml-2">{percentage}%</span>
                </div>
              ))}
            </div>

            {/* Dynamic Increase/Decrease Section */}
            <div className="mt-12 flex justify-between text-center">
              <div
                onClick={(e) => handleClick(e, "experience")}
                className="cursor-pointer"
              >
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
                >
                  {stats.experience}+
                </h3>
                <p>Years Experience</p>
              </div>

              <div
                onClick={(e) => handleClick(e, "projects")}
                className="cursor-pointer"
              >
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
                >
                  {stats.projects}+
                </h3>
                <p>Projects Completed</p>
              </div>

              <div
                onClick={(e) => handleClick(e, "clients")}
                className="cursor-pointer"
              >
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
                >
                  {stats.clients}+
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
