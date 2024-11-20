import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="md:max-w-xs">
      <h3 className="text-2xl mb-5 font-semibold text-primary-green">
        Gainer History{" "}
      </h3>
      <Link
        className="block hover:underline hover:text-hover-blue transition-colors mb-2 text-link"
        href={"/community#before1988"}
      >
        Before 1988: Community Origins
      </Link>
      <Link
        className="block hover:underline hover:text-hover-blue transition-colors mb-2 text-link"
        href={"/community#yr1988"}
      >
        1988 - 1996: A CommunityForms / The Analog Era{" "}
      </Link>
      <Link
        className="block hover:underline hover:text-hover-blue transition-colors mb-2 text-link"
        href={"/community#yr1996"}
      >
        1996 - 2003: The Early Internet Era{" "}
      </Link>
      <Link
        className="block hover:underline hover:text-hover-blue transition-colors mb-2 text-link"
        href={"/community#yr2003"}
      >
        2003 - 2011: The Mature Internet Era{" "}
      </Link>
      <Link
        className="block hover:underline hover:text-hover-blue transition-colors mb-2 text-link"
        href={"/community#"}
      >
        2011 - Present: The Social Era{" "}
      </Link>
      <h3 className="text-2xl mt-8 mb-5 font-semibold text-primary-green">
        Gainer Community Report{" "}
      </h3>
      <Link
        className="block hover:underline hover:text-hover-blue transition-colors mb-2 text-link"
        href={"/community#"}
      >
        Summary and takeaways{" "}
      </Link>
      <Link
        className="block hover:underline hover:text-hover-blue transition-colors mb-2 text-link"
        href={"/community#"}
      >
        Access the report{" "}
      </Link>
    </div>
  );
};

export default Sidebar;
