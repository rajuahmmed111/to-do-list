import React from "react";
import Image from "next/image";

// Define props for the DynamicImage component
interface DynamicImageProps extends React.HtmlHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties; // Optional inline styles
}

const DImage: React.FC<DynamicImageProps> = ({
  src,
  alt,
  width = 500, // Default width
  height = 300, // Default height
  style,
  ...props
}) => {
  return (
    <Image
      alt={alt}
      src={src}
      width={width}
      height={height}
      style={{
        maxWidth: "100%", // Responsive width
        height: "auto", // Maintain aspect ratio
        ...style, // Merge custom styles
      }}
      {...props} // Pass through any additional props
    />
  );
};

export default DImage;
