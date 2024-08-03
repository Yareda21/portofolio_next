"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "../app/style.css";

// import required modules
import { EffectCards } from "swiper/modules";

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
                            <div class="max-w-xl">
                                <div class=" dark:bg-gray-800 p-6 rounded-lg shadow-xl">
                                    <p class=" text-base md:text-lg h-30 sm:h-auto">
                                        {item.testimonial}
                                    </p>

                                    <div class="flex mt-4 justify-end">
                                        <div class="w-14 h-14 mr-4 md:w-16 md:h-16">
                                            <img
                                                class="rounded-full"
                                                src={item.photoURL}
                                                alt="John Doe Profile Picture"
                                            />
                                        </div>
                                        <div class="md:text-lg">
                                            <div class="flex flex-row">
                                                <p class="font-semibold mr-2">
                                                    {item.displayName}
                                                </p>
                                                <div class="flex gap-3">
                                                    <a
                                                        href="#"
                                                        class="dark:hover:text-blue-500 transition-colors duration-75"
                                                        target="_blank"
                                                    >
                                                        <i class="fa-brands fa-linkedin"></i>
                                                        {item.email}
                                                    </a>
                                                    <a
                                                        href="#"
                                                        class="dark:hover:text-blue-500 transition-colors duration-75"
                                                        target="_blank"
                                                    >
                                                        <i class="fa-brands fa-twitter"></i>
                                                    </a>
                                                </div>
                                            </div>

                                            <p class=" text-sm">
                                                <span>
                                                    We met : {item.whereMet}
                                                </span>
                                                <span>
                                                    Phone Number: : {item.phone}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}
