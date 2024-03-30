"use client";

import React, { useState } from "react";
import Circles from "../../components/Circles";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaGit,
  FaNode,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiGithub,
  SiLinux,
  SiC,
  SiIos,
  SiAndroid,
  SiVisualstudiocode,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaFigma />,
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiTailwindcss />,
          <SiFramer />,
          <SiNextdotjs />,
          <SiNodedotjs />,
        ],
      },
      {
        title: "Software Development",
        icons: [
          <SiPython />,
          <FaGit />,
          <SiGithub />,
          <SiLinux />,
          <SiC />,
          <FaJava />,
        ],
      },
      {
        title: "Application Development",
        icons: [
          <FaReact />,
          <FaNode />,
          <SiIos />,
          <SiAndroid />,
          <SiVisualstudiocode />,
        ],
      },
    ],
  },
  // {
  //   title: "awards",
  //   info: [
  //     {
  //       title: "Webby Awards - Honoree",
  //       stage: "2011 - 2012",
  //     },
  //     {
  //       title: "Adobe Design Achievement Awards - Finalist",
  //       stage: "2009 - 2010",
  //     },
  //   ],
  // },
  {
    title: "experience",
    info: [
      {
        title: "Full Stack Web Developer and Instructor - Exceed ",
        stage: "2021 - 2023",
      },

      {
        title: "Web Developer - Great College",
        stage: "2020 - 2021",
      },
    ],
  },
  {
    title: "Certificates and Class",
    info: [
      {
        title: "CS50’s Introduction to Computer Science",
        stage: "Harvard University, 2023 ",
        link: "https://cs50.harvard.edu/certificates/7284249a-f17c-40aa-8978-29d5fb924926.png?size=letter",
      },
      {
        title: "Diploma in HTML5, CSS3 and JavaScript ",
        stage: "Alison 2021",
        link: "",
      },
      {
        title: "Software Engineering - ALX",
        stage: "2023 Cohort 17",
        link: "",
      },
      {
        title: "Introduction to Web Designing",
        stage: "Great Learning",
        link: "https://verify.mygreatlearning.com/verify/BKYCOTVZ",
      },
      {
        title: "Front End Development - HTML",
        stage: "Great Learning",
        link: "https://verify.mygreatlearning.com/verify/PEVMXDOI",
      },
      {
        title: "React JS",
        stage: "Great Learning",
        link: "https://verify.mygreatlearning.com/verify/YAFMZBNN",
      },
      {
        title: "Front End Development - CSS",
        stage: "Great Learning",
        link: "https://verify.mygreatlearning.com/verify/BBCEBHHO",
      },

      {
        title: "Machine Learning for Apps - Alison.com",
        stage: "2021",
        link: "",
      },
      {
        title: "Responsive Web Design",
        stage: "2021",
        link: "https://freecodecamp.org/certification/fcc5acd3da5-ebfe-4b2e-9202-cdd0b2dee5ee/responsive-web-design",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="absolute z-40 h-full w-full bg-primary/30  pt-[100px] md:pt-13 xl:text-left">
      {/* <Circles /> */}
      <h1 className="hidden">Yared Kebede</h1>
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden z-[-10] xl:flex absolute bottom-0 -left-[120px]"
      >
        <div className="hidden xl:flex xl:max-w-none">
          <Image
            src={"/avatar.png"}
            loading="lazy"
            layout="responsive"
            width={400}
            height={600}
            alt="Yared Kebede"
            className="translate-z-0 w-full h-full"
          />
        </div>
      </motion.div>

      <div className="container mx-auto h-full flex z-10 flex-col items-center xl:flex-row">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center items-center ">
          <h2 className="h2 text-center">
            Captivating <span className="text-accent">Stories</span> birth
            magnificent designs.
          </h2>
          <p className="max-w-[500px] text-white flex-1 xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            I thrive on difficult projects that necessitate creative solutions,
            and I enjoy working with a wide range of programming languages and
            frameworks, including{" "}
            <span className="text-accent">
              {" "}
              JAVASCRIPT, PYTHON, HTML, CSS, TAILWINDCSS, REACT, EXPO{" "}
            </span>{" "}
            and many more..
          </p>
          {/* counter */}
          <div>
            <div>
              {/* experiance */}
              {/*
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Years of Experiance
              </div>
              */}
            </div>
          </div>
        </div>

        <div className=" flex flex-col w-full lg:justify-center xl:max-w-[55%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } 
                    cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                  key={itemIndex}
                >
                  {item.title}
                </div>
              );
            })}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <a
                    href={item.link}
                    target="_blank"
                    className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                  >
                    {/* title */}
                    <div className="font-light text-white md:mb-0">
                      {item.title}
                    </div>
                    <div className="hidden md:flex">-</div>
                    <div>{item.stage}</div>
                    <div className="flex gap-x-4">
                      {/* icons */}
                      {item.icons?.map((icon, itemIndex) => {
                        return (
                          <div className="text-2xl text-white">{icon}</div>
                        );
                      })}
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
