import ServiceSlider from "@/components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "@/components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import ParticleContainer from "@/components/ParticleContainer";

const page = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <ParticleContainer />
      <div className="container mx-auto flex justify-center items-center">
        {/* text */}
        <div className="hidden text-center md:block xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
          <h2 className="h2 xl:mt-8">
            My Projects <span className="text-accent">.</span>
          </h2>
          <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
            These are my few projects I have done!! Swipe to see different projects with diffrent technologies.  
          </p>
        </div>
        {/* slider */}
        <ServiceSlider />
      </div>
      <Bulb />
    </div>
  );
};

export default page;
