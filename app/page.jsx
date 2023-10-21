import ParticleContainer from "@/components/ParticleContainer";
import Avatar from "@/components/Avatar";
import ProjectsBtn from "@/components/ProjectsBtn";
import Image from "next/image";
import { fadeIn } from "../variants";

export default function Home() {
  return (
    <div className="bg-primary/60 h-[90%]">
      {/* text */}
      <div
        className="w-full h-full bg-gradient-to-r from-primary/10 
      via-black/30 to-black/10"
      >
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <h1 className="h1">
            Forging Concepts <br />
            into <span className="text-accent">Digital Reality</span>
          </h1>
          {/* subtitle */}
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            A civil engineer and Self-taught web developer with substantial
            project experience in web development platforms like React.js,
            Next.js and many more.
          </p>
          {/* button */}
          <dir className="flex justify-center xl:justify-start">
            <ProjectsBtn />
          </dir>
        </div>
      </div>

      {/* image */}
      <div className="w-[1200px] h-full absolute right-0">
        hello
        {/* bg-image */}
        <div>
          <Image
            src={"/bg-explosion.png"}
            className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right
          xl:bg-no-repeat w-full aboslute mix-blend-color-dodge "
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
