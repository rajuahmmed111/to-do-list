import Link from "next/link";
import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { LiaUserPlusSolid } from "react-icons/lia";
import { RiKey2Fill } from "react-icons/ri";
import { TbFlagFilled } from "react-icons/tb";

const TopBar = () => {
  return (
    <header className="bg-black/30  flex justify-between items-center">
      <nav className="flex gap-4 container text-xs py-1 text-right w-full justify-end">
        <Link href="#" className="text-white/80 flex gap-2 items-center">
          <FaQuestionCircle className="text-sm" />
          Contact
        </Link>
        <Link href="#" className="text-white/80 flex gap-2 items-center">
          <TbFlagFilled className="text-sm" />
          English (US)
        </Link>
        <Link href="#" className="text-white/80 flex gap-2 items-center">
          <LiaUserPlusSolid className="text-sm" />
          Join Us
        </Link>
        <Link href="#" className="text-white/80 flex gap-2 items-center">
          <RiKey2Fill className="transform text-lg -rotate-90 scale-x-[-1]" />
          Sign In
        </Link>
      </nav>
    </header>
  );
};

export default TopBar;
