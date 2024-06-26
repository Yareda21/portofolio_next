import Image from "next/image";
import avatar from "@/public/avatar.png";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        loading="lazy"
        layout="responsive"
        src={avatar}
        width={600}
        height={800}
        alt="Yared Kebede"
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
