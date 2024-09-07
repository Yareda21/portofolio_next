import ServiceSlider from "@/components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "@/components/Circles";

import ParticleContainer from "@/components/ParticleContainer";

export const metadata = {
    description: "Yared Kebede Full Stack Web Developer",
};

const page = () => {
    return (
        <div className="h-[100vh] w-[100%] bg-primary/30 pt-26 flex items-center">
            {/* <Circles /> */}
            <ParticleContainer />
            <div className="container mx-auto lg:flex justify-center items-center">
                {/* text */}
                <div className=" text-center md:block xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
                    <h2 className="h2 xl:mt-8">
                        <span className="text-accent">My Projects.</span>
                    </h2>
                    <p className="hidden mb-4 max-w-[400px] text-xl lg:text-2xl mx-auto lg:mx-0">
                        These are my few projects I have done!! Swipe to see
                        different projects with diffrent technologies.
                    </p>
                </div>
                {/* slider */}
                <ServiceSlider />
            </div>
            {/* <Bulb /> */}
        </div>
    );
};

export default page;
