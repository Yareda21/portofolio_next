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

  const cardImages = ["/a.jpg", "/b.jpg", "/c.jpg", "/d.jpg", "/e.jpg"];
  const service = [
    "Full Stack",
    "Frontend Development",
    "Mobile Application",
    "Digital Marketing",
    "Software Development",
  ];

  const cardDescriptions = [
    "This is a description, write whatever you need here, this is just text for a test",
    "This is a description, write whatever you need here, this is just text for a test",
    "This is a description, write whatever you need here, this is just text for a test",
    "This is a description, write whatever you need here, this is just text for a test",
    "This is a description, write whatever you need here, this is just text for a test",
  ];

  return (
    <section className="absolute top-10  w-full z-40 py-1 pb-[300px] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-extrabold text-white">Services</h1>
      </div>
      <div className="block m-auto justify-center items-center overflow-scroll z-30 h-[550px] md:overflow-auto">
        <div className="mt-2  flex flex-col md:flex-row justify-center items-center gap-5">
          {[0, 1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${
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
    </section>
  );
};

export default OpenCards;
