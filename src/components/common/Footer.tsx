import Link from "next/link";
import React from "react";
import { FaShop, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="container mx-auto px-4 pt-5 pb-8 text-sm text-white">
      <div className="">
        <div>Version: 5.0.0-341600 | Legal Notice | Contact</div>
        <div className="flex flex-wrap gap-2">
          <Link href="#" className="flex items-center gap-2">
            <FaTwitter />
            Follow us on Twitter
          </Link>
          <Link href="#" className="flex items-center gap-2">
            <FaShop />
            Buy Grommr merchandise
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
