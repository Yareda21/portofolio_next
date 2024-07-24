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

export default function TestimonyCards() {
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
                            <div class="max-w-xl">
                                <div class=" dark:bg-gray-800 p-6 rounded-lg shadow-xl">
                                    <p class=" text-base md:text-lg h-30 sm:h-auto">
                                        Yared's digital marketing course was a
                                        game-changer for me. His teaching method
                                        is both engaging and practical, making
                                        complex concepts easy to understand. The
                                        Telegram channel he created for our
                                        class was a great tool for collaboration
                                        and overcoming language barriers.
                                    </p>

                                    <div class="flex mt-4 justify-end">
                                        <div class="w-14 h-14 mr-4 md:w-16 md:h-16">
                                            <img
                                                class="rounded-full"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRreh9Fwfj6mP6s9CINDCpfUXmi6OrRXJoD8fFI7BV01mzbbC1FhW5MLGQZYgH9PJ8UhC0&usqp=CAU"
                                                alt="John Doe Profile Picture"
                                            />
                                        </div>
                                        <div class="md:text-lg">
                                            <div class="flex flex-row">
                                                <p class="font-semibold mr-2">
                                                    John Doe
                                                </p>
                                                <div class="flex gap-3">
                                                    <a
                                                        href="#"
                                                        class="dark:hover:text-blue-500 transition-colors duration-75"
                                                        target="_blank"
                                                    >
                                                        <i class="fa-brands fa-linkedin"></i>
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
                                                CEO
                                                <a
                                                    href="#"
                                                    class="hover:underline hover:cursor-pointer hover:text-blue-500 transition-colors duration-75"
                                                >
                                                    Tech Company Z
                                                </a>
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
