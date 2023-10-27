import ParticleContainer from "@/components/ParticleContainer";
import Avatar from "@/components/Avatar";
import Image from "next/image";


export default function Home() {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div
        className="w-full h-full bg-gradient-to-r from-primary/10 
      via-black/30 to-black/10"
      >
        {/* notes in home page */}
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <h1 className="h11 md:h1">
            Forging Concepts <br />
            into <span className="text-accent">Digital Reality</span>
          </h1>
          {/* subtitle */}
          <p className="text-xl max-w-sm text-white xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            A civil engineer and Self-taught Software Engineer with substantial
            project experience in web and app development platforms like
            React.js, Next.js and many more.
          </p>
        </div>
      </div>

      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg-image */}
        <Image
          src={"/bg-explosion.png"}
          width={600}
          height={600}
          className="hidden xl:block xl:bg-cover xl:bg-right
          xl:bg-no-repeat w-full absolute mix-blend-color-dodge translate-z-0"
        />
        {/* <div
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right
          xl:bg-no-repeat w-full absolute mix-blend-color-dodge translate-z-0 "
        ></div> */}
        {/* particles */}
        <div>
          <ParticleContainer />
        </div>
        {/* Avatar */}
        <div
          className="w-full h-full max-w-[500px] max-h-[450px] absolute 
          bottom-40 lg:right-[12%]"
        >
          <Avatar />
        </div>
      </div>
    </div>
  );
}
