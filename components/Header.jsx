import Images from "next/image";
import Link from "next/link";
import socials from "../components/Socials";

const Header = () => {
  return (
    <header
      className="absolute z-30 w-full flex items-center 
    px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">Header</div>
    </header>
  );
};

export default Header;
