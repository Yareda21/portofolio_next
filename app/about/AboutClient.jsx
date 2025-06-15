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
import CountUp from "react-countup";
import ParticleContainer from "@/components/ParticleContainer";

const AboutClient = ({ aboutData }) => {
    const [index, setIndex] = useState(0);

    return (
        <div>
            <ParticleContainer />
            <Circles />
            <div className="absolute h-full w-full bg-primary/30 pt-[115px] md:pt-13 xl:text-left">
                <h1 className="hidden">Yared Kebede</h1>
                <motion.div
                    variants={fadeIn("right", 0.1)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="hidden z-[-10] xl:flex absolute bottom-0 -left-[120px]"
                >
                    <div className="hidden xl:flex">
                        <img
                            src={"/avatar.png"}
                            loading="lazy"
                            layout="responsive"
                            width={400}
                            height={600}
                            alt="Yared Kebede"
                            className="translate-z-0 "
                        />
                    </div>
                </motion.div>

                <div className="container mx-auto h-full flex z-10 flex-col items-center xl:flex-row">
                    {/* text */}
                    <div className="pt-[50px]  flex flex-col justify-center items-center">
                        <h2 className="h2 text-center">
                            Captivating{" "}
                            <span className="text-accent">Stories</span> birth
                            magnificent designs.
                        </h2>
                        <p className="hidden md:flex-1 max-w-[500px] text-white xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
                            I thrive on difficult projects that necessitate
                            creative solutions, and I enjoy working with a wide
                            range of programming languages and frameworks,
                            including{" "}
                            <span className="text-accent">
                                {" "}
                                JAVASCRIPT, PYTHON, HTML, CSS, TAILWINDCSS,
                                REACT, EXPO{" "}
                            </span>{" "}
                            and many more..
                        </p>
                        {/* counter */}

                        <div className="flex md:block gap-3">
                            {/* experiance */}

                            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={5} duration={5} /> +
                                </div>
                            </div>
                            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                                Years of Experiance
                            </div>
                        </div>
                    </div>

                    <div className=" flex flex-col w-full z-10 justify-start lg:justify-center xl:max-w-[55%] h-[480px]">
                        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
                            {/*  */}
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

                        <div className="py-2 xl:py-6 flex flex-col gap-y-2 overflow-auto h-[280px] xl:gap-y-4 items-center xl:items-start">
                            {aboutData[index].info.map((item, itemIndex) => {
                                return (
                                    <div
                                        key={itemIndex}
                                        className="flex flex-col md:flex-row max-w-max gap-x-2  text-white/60"
                                    >
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 gap-y-2 items-center text-white/60"
                                        >
                                            {/* title */}
                                            <div className="font-light text-white md:mb-0">
                                                {item.title}
                                            </div>
                                            <div className="hidden md:flex">
                                                -
                                            </div>
                                            <div>{item.stage}</div>
                                            <div className="flex gap-x-4">
                                                {/* icons */}
                                                {item.icons?.map(
                                                    (icon, itemIndex) => {
                                                        return (
                                                            <div
                                                                className="text-2xl text-white"
                                                                title={
                                                                    icon.names
                                                                }
                                                            >
                                                                {icon}
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutClient;
