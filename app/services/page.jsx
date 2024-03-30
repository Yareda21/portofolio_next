"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";


const OpenCards = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardHover = (index) => {
    setExpandedIndex(index);
  };

  const handleCardLeave = () => {
    setExpandedIndex(-1);
  };

  const cardVariants = {
    expanded: {
      width: "400px",
    },
    collapsed: {
      width: "200px",
    },
  };

  const cardImages = ["/a.jpeg", "/b.jpg", "/c.png", "/f.jpeg"];
  const service = [
    "Full Stack",
    "Frontend Development",
    "Mobile Application",
    "Software Development",
  ];

  const cardDescriptions = [
    "A powerful combination of four JavaScript-based technologies commonly used to build full-stack web applications",
    "The exciting realm where creativity meets technology to bring websites and web applications to life.",
    "creating software specifically for smartphones and tablets. It's like building websites, but tailored for smaller screens and touch controls. ",
    "Python has become a go-to language for software development, Check it out",
  ];

  return (
    <section className="flex flex-col justify-center items-center h-full w-full px-5 ">
      <div className="z-40 mt-[110px] h-full w-full">
        <div className="max-w-7xl mx-auto px-4 my-1 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold text-white">Services</h1>
        </div>
        <div className="block m-auto h-[400px] w-full overflow-auto px-5">
          <div className="flex flex-col md:flex-row md:h-[400px] justify-center items-center gap-5">
            {[0, 1, 2, 3].map((index) => (
              <motion.div
                key={index}
                className={`card cursor-pointer h-[350px] bg-cover bg-center rounded-[20px] ${
                  index === expandedIndex ? "expanded" : ""
                }`}
                variants={cardVariants}
                initial="collapsed"
                animate={index === expandedIndex ? "expanded" : "collapsed"}
                transition={{ duration: 0.5 }}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={handleCardLeave}
                style={{
                  backgroundImage: `url(${cardImages[index]})`,
                }}
              >
                <div className="card-content h-full flex flex-col justify-end">
                  <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center">
                    <h2 className="text-xl font-semibold text-white text-center">
                      {service[index]}
                    </h2>
                    {index === expandedIndex && (
                      <p className="mt-2 text-gray-300 text-justify px-10">
                        {cardDescriptions[index]}{" "}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenCards;
