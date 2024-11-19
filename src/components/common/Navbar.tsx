import Link from "next/link";
import React from "react";
import Logo from "../ui/logo";
import { TbBook } from "react-icons/tb";
// import { GiFeather } from "react-icons/gi";
import { FaFeatherAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="p-4 max-md:pb-0 max-md:pr-0 flex flex-wrap gap-4 justify-between ">
      <Logo />
      <div className="flex-1 flex justify-end">
        <nav className="flex max-w-lg text-sm items-center justify-center bg-gradient-to-b from-[#FDFDFD] to-[#D5CDCB] py-0 px-3 rounded-lg max-md:rounded-b-none max-md:rounded-r-none md:shadow-md border border-gray-300">
          <ul className="flex items-center text-xs  font-medium text-text-tea">
            <li className="flex items-center space-x-2">
              <Link href="#" className="hover:underline">
                Home
              </Link>
            </li>
            <span className="h-8 border-r border-dotted border-gray-400 mx-2 md:mx-4"></span>{" "}
            {/* Divider */}
            <li className="flex items-center sm:space-x-2">
              <span className="material-icons max-sm:hidden">
                <TbBook className="text-base" />
              </span>
              <Link href="#" className="hover:underline">
                Gaining FAQ
              </Link>
            </li>
            <span className="h-8 border-r border-dotted border-gray-400 mx-2 md:mx-4"></span>{" "}
            {/* Divider */}
            <li className="flex items-center sm:space-x-1">
              <FaFeatherAlt className="max-sm:hidden" />
              <Link href="#" className="hover:underline">
                About Us
              </Link>
            </li>
            <span className="h-8 border-r border-dotted border-gray-400 mx-2 md:mx-4"></span>{" "}
            {/* Divider */}
            <li className="flex items-center space-x-2">
              <Link href="#" className="hover:underline">
                Community
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
