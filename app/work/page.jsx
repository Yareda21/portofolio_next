"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const department = [
  { name: "HTML, CSS and JavaScript", description: ["des of html and css"] },
  { name: "React.js" },
  { name: "Next.js" },
  { name: "Python Code" },
];

const page = () => {
  
  return (
    <div className="grid grid-cols-3 grid-rows-1 z-30 gap-4 pt-[100px]">
      {/* Html and cs */}
      <div className="">
        <h1 className="text-2xl text-accent text text-center">
          HTML, CSS and JavaScript
        </h1>
        <div className="my-5 mx-auto">
          <Link href="" target="_blank">
            <h1 className="text-center text-lg mb-2 mt-3">Education Website</h1>
            <div className="flex justify-center items-center w-[380px]">
              <Image
                src="/educa.PNG"
                width={300}
                height={300}
                alt="html and css"
                className="rounded-full mx-auto"
              />
            </div>
          </Link>
        </div>
      </div>
      {/* react js */}
      <div className="">
        <h1 className="text-2xl text-accent text text-center">
          HTML, CSS and JavaScript
        </h1>
        <div className="my-5">
          <Link href="" target="_blank">
            <h1 className="text-center text-lg mb-2 mt-3">Education Website</h1>
            <div className="flex justify-center items-center w-[300px]">
              <Image
                src="/educa.PNG"
                width={300}
                height={300}
                alt="html and css"
                className="rounded-full"
              />
            </div>
          </Link>
        </div>
      </div>
      {/* next */}
      <div className="">
        <h1 className="text-2xl text-accent text text-center">
          HTML, CSS and JavaScript
        </h1>
        <div className="my-5">
          <Link href="" target="_blank">
            <h1 className="text-center text-lg mb-2 mt-3">Education Website</h1>
            <div className="flex justify-center items-center w-[300px]">
              <Image
                src="/educa.PNG"
                width={300}
                height={300}
                alt="html and css"
                className="rounded-full"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
