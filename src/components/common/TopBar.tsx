import Link from "next/link";
import React from "react";

const TopBar = () => {
  return (
    <header className="bg-white/80 p-4 flex justify-between items-center">
      <nav className="flex gap-4 text-sm">
        <Link href="#" className="text-neutral-600">
          Contact
        </Link>
        <Link href="#" className="text-neutral-600">
          English (US)
        </Link>
        <Link href="#" className="text-neutral-600">
          Sign Up
        </Link>
        <Link href="#" className="text-neutral-600">
          Sign In
        </Link>
      </nav>
    </header>
  );
};

export default TopBar;
