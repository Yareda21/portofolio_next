import ParticleContainer from "@/components/ParticleContainer";
import Avatar from "@/components/Avatar";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

export const metadata = {
    description: "Yared Kebede Full Stack Web Developer",
};

export default function Home() {
    return (
        <div className="h-full">
            <h1 className="hidden">Yared Kebede</h1>
            {/* text */}
            <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
                {/* notes in home page */}
                <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
                    {/* title */}
                    <h1 className="h11 md:h1">
                        Forging Concepts <br />
                        into{" "}
                        <span className="text-accent">Digital Reality</span>
                    </h1>
                    {/* subtitle */}
                    <p className="text-xl max-w-sm text-white xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
                        A civil engineer and Self-taught Software Engineer with
                        substantial project experience in web and app
                        development platforms like React.js, Next.js and many
                        more.
                    </p>
                </div>
            </div>

            {/* image */}
            <div className="w-[1200px] h-full absolute right-0 bottom-0">
                <ParticleContainer />
                {/* Avatar */}
                <div
                    className="w-full h-full max-w-[500px] max-h-[450px] absolute 
          bottom-40 lg:right-[12%]"
                >
                    <Avatar />
                </div>
                <div className="z-20 absolute top-0 left-0 h-[90%] w-full">
                    {/* Projects btn - this is where you change the location */}
                    <div className="scale-50 md:scale-75 lg:scale-90 xl:100 relative top-[430px] left-[100px] ">
                        <Link
                            href={"/work"}
                            className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
                        >
                            <Image
                                src={"/rounded-text.png"}
                                loading="lazy"
                                layout="responsive"
                                width={141}
                                height={148}
                                alt="Yared Kebede"
                                className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
                            />
                            <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
