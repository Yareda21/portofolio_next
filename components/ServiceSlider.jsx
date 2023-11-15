"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../app/style.css";

import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

const serviceData = [
  {
    icon: <RxCrop />,
    title: "Restaurant food Delivery",
    description: "Help customers shop foods from any restuarant from Addis.",
    photo: "photo",
    link: "https://yars21.github.io/restaurant/",
  },
  {
    icon: <RxPencil2 />,
    title: "Tour and Travel Website",
    description:
      "This is a website for tour companies to facilitate and connect with their clients. the website provides booking, flight plan and many more.. ",
    photo: "photo",
    link: "https://yars21.github.io/travel/",
  },
  {
    icon: <RxDesktop />,
    title: "MIT College",
    description:
      "Millennials Institute of Technology website is an educational website for colleges or a university, it shows courses given by the institute and many more... ",
    photo: "photo",
    link: "https://yars21.github.io/school/",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    photo: "photo",
    link: "https://yareda21.github.io",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    photo: "photo",
    link: "https://yareda21.github.io",
  },
];

// import required modules
import { EffectCards } from "swiper/modules";


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
              <div
                className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8
            flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
              >
                {/* icon */}
                <div>{item.icon}</div>
                {/* title and desc */}
                <div>
                  <div>{item.title}</div>
                  <p>{item.description}</p>
                </div>
                {/* photo */}
                <div>{item.photo}</div>
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
