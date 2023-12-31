import Image from 'next/image'
import React from 'react'

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge w-[200px] xl:w-[480px] opacity-50">
      <Image src="/top-left-img.png" width={400} height={400} alt="Yared Kebede" loading='lazy' layout='responsive'/>
    </div>
  );
}

export default TopLeftImg