import Link from "next/link";
import React from "react";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="z-40 absolute top-0 left-0 h-full w-full">
      {/* Projects btn - this is where you change the location */}
      <div className="scale-50 md:scale-75 lg:scale-90 xl:100 relative top-[30px] left-[100px] ">
        <Link
          href={"/work"}
          className="relative w-[185px] h-[185px]
          flex justify-center items-center
          bg-circleStar bg-cover bg-center bg-no-repeat group"
        >
          <Image
            src={"/rounded-text.png"}
            width={141}
            height={148}
            alt=""
            className="animate-spin-slow w-full h-full 
            max-w-[141px] max-h-[148px]"
          />
          <HiArrowRight
            className="absolute text-4xl group-hover:translate-x-2
          transition-all duration-300"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProjectsBtn;
 