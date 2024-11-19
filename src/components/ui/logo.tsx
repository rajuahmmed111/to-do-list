import Image from "next/image";
import React from "react";
import LogoImg from "@/assets/logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image
          src={LogoImg.src}
          alt="Grommr"
          width={LogoImg.width}
          height={LogoImg.height}
          className="h-10 w-auto"
        />
      </Link>
    </div>
  );
};

export default Logo;
