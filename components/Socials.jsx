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
    <div className="flex items-center gap-x-5 text-[30px]">
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiDiscordLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link
        href={"https://github.com/Yareda21"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiTiktokLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>
    </div>
  );
}

export default Socials