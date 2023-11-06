import Link from 'next/link'
import React from 'react'
import {
    RiYoutubeLine,
    RiInstagramLine,
    RiFacebookLine,
    RiTiktokLine,
    RiGithubLine,
    RiDiscordLine
} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-[20px] md:text-[35px]">
      <Link
        target="_blank"
        title="Discord"
        href={""}
        className="hover:text-accent transition-all duration-300"
      >
        <RiDiscordLine />
      </Link>
      <Link
        target="_blank"
        title="Facebook"
        href={"https://www.facebook.com/yaredk2"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
      <Link
        target="_blank"
        title="Github"
        href={"https://github.com/Yareda21"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        target="_blank"
        title="Discord"
        href={""}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        target="_blank"
        title="Tiktok"
        href={""}
        className="hover:text-accent transition-all duration-300"
      >
        <RiTiktokLine />
      </Link>
      <Link
        target="_blank"
        title="Youtube"
        href={""}
        className="hover:text-accent transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link>
    </div>
  );
}

export default Socials