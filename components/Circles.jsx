import React from "react";
import Image from "next/image";

const Circles = () => {
  return (
    <div
      className="w-[400px] xl:w-[500px] absolute -right-16 -bottom-2
    mix-blend-color-dodge animate-pulse duration-75 z-10"
    >
      <Image
        src={"/circles.png"}
        width={260}
        height={200}
        className="w-full h-full"
        alt="yared"
      />
    </div>
  );
};

export default Circles;
