"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { SiGmail } from "react-icons/si";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "../app/style.css";

// import required modules
import { EffectCards } from "swiper/modules";
import { BiLogoGmail } from "react-icons/bi";

import { db } from "@/app/lib/config";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

async function getDataFromFirestore() {
    const querySnapShoot = await getDocs(collection(db, "testimonials"));
    const data = [];
    querySnapShoot.forEach((file) => {
        data.push({ id: file.id, ...file.data() });
    });

    return data;
}

export default function TestimonyCards() {
    const [testimonyData, setTestimonyData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const getingData = await getDataFromFirestore();
            setTestimonyData(getingData);
        }

        fetchData();
    }, []);
    console.log(testimonyData);
    return (
        <>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                {testimonyData.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
                                <img
                                    src={item.photoURL}
                                    className="w-16 h-16 rounded-full border-2 border-indigo-500"
                                />
                                {/* icon */}
                                <div>{item.displayName}</div>
                                {/* title and desc */}
                                <div>
                                    <p className=" text-base text-black ">
                                        {item.testimonial}
                                    </p>
                                </div>
                                {/* photo
                                        <div>{item.photo}</div> */}
                                {/* arrow */}
                                <div className="flex  text-2xl">
                                    <span className=" mr-3 text-gray-800 font-semibold">
                                        <BiLogoGmail />
                                    </span>
                                    <span className=" text-white text-sm mt-0.5">
                                        {item.email}
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}
