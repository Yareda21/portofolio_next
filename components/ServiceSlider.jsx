"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "../app/style.css";

import { RxArrowTopRight } from "react-icons/rx";

import { serviceData } from "@/assets/imports";

// import required modules
import { EffectCards } from "swiper/modules";
import Image from "next/image";

export default function App() {
    return (
        <>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                {serviceData.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="bg-[rgba(65,47,123,0.15)] rounded-lg px-6 py-8 flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
                                {/* icon */}

                                {/* title and desc */}
                                <div>
                                    <div>{item.title}</div>
                                    <p className=" text-sm">
                                        {item.description}
                                    </p>
                                </div>
                                {/* photo */}
                                <div>
                                    <Image
                                        src={item.photo}
                                        width="400"
                                        height="200"
                                    />
                                </div>
                                {/* arrow */}
                                <div className="text-2xl">
                                    <a
                                        className="cursor-pointer flex"
                                        href={item.link}
                                        target="_blank"
                                    >
                                        Go
                                        <RxArrowTopRight />
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}
