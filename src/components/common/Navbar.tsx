import Link from "next/link";
import React from "react";
import Logo from "../ui/logo";
import { TbBook } from "react-icons/tb";

const Navbar = () => {
  return (
    <header className="p-4 flex justify-between items-center">
      <Logo />
      <nav className="flex text-sm items-center justify-center bg-gradient-to-b from-[#FDFDFD] to-[#D5CDCB] p-4 rounded-full shadow-md border border-gray-300">
        <ul className="flex items-center text-sm font-medium text-text-tea">
          <li className="flex items-center space-x-2">
            <Link href="#" className="hover:underline">
              Home
            </Link>
          </li>
          <span className="h-8 border-r-2 border-dotted border-gray-400 mx-4"></span>{" "}
          {/* Divider */}
          <li className="flex items-center space-x-2">
            <span className="material-icons ">
              <TbBook />
            </span>
            <Link href="#" className="hover:underline">
              Gaining FAQ
            </Link>
          </li>
          <span className="h-8 border-r border-dotted border-gray-400 mx-4"></span>{" "}
          {/* Divider */}
          <li className="flex items-center space-x-2">
            <span className="material-icons ">edit</span>
            <Link href="#" className="hover:underline">
              About Us
            </Link>
          </li>
          <span className="h-8 border-r border-dotted border-gray-400 mx-4"></span>{" "}
          {/* Divider */}
          <li className="flex items-center space-x-2">
            <span className="material-icons ">groups</span>
            <Link href="#" className="hover:underline">
              Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
