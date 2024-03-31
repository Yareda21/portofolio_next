import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-1 py-2">
          {/* Logo */}
          <Link href={"/"}>
            <p className="text-[30px] text-white">
              <span className="font-bold ">Yared</span>{" "}
              <span className="hidden md:inline">Kebede</span>
            </p>
          </Link>
          <Link href={"/practice"} className="hidden md:flex">
            <h1 className=" text-lg font-bold">Project</h1>
          </Link>
          {/* Social Media */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
