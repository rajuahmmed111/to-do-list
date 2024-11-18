import Image from "next/image";
import React from "react";
import LogoImg from "@/assets/logo.png";

const Logo = () => {
  return (
    <div>
      <Image
        src={LogoImg.src}
        alt="Grommr"
        width={120}
        height={40}
        className="h-10 w-auto"
      />
    </div>
  );
};

export default Logo;
