import Link from "next/link";
import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { LiaUserPlusSolid } from "react-icons/lia";
import { RiKey2Fill } from "react-icons/ri";
import { TbFlagFilled } from "react-icons/tb";

const TopBar = () => {
  return (
    <header className="bg-black/30  flex justify-between items-center">
      <nav className="flex gap-1 container text-xs py-px text-right w-full justify-end">
        <Link
          href="#"
          className="text-white/80 rounded-md hover:bg-white/15 transition-colors px-2 py-[2px] flex gap-2 items-center"
        >
          <FaQuestionCircle className="text-sm" />
          Contact
        </Link>
        <span className="h-4 my-auto border-r border-dotted border-gray-400 "></span>{" "}
        <Link
          href="#"
          className="text-white/80 rounded-md hover:bg-white/15 transition-colors px-2 py-[2px] flex gap-2 items-center"
        >
          <TbFlagFilled className="text-sm" />
          English (US)
        </Link>
        <span className="h-4 my-auto hidden sm:flex border-r border-dotted border-gray-400 "></span>{" "}
        <Link
          href="#"
          className="text-white/80 hidden sm:flex rounded-md hover:bg-white/15 transition-colors px-2 py-[2px] gap-2 items-center"
        >
          <LiaUserPlusSolid className="text-sm" />
          Join Us
        </Link>
        <span className="h-4 my-auto hidden sm:flex border-r border-dotted border-gray-400 "></span>{" "}
        <Link
          href="#"
          className="text-white/80 hidden sm:flex rounded-md hover:bg-white/15 transition-colors px-2 py-[2px] gap-2 items-center"
        >
          <RiKey2Fill className="transform text-lg -rotate-90 scale-x-[-1]" />
          Sign In
        </Link>
      </nav>
    </header>
  );
};

export default TopBar;
