import React from "react";
import Sidebar from "./_Sidebar";
import Content from "./_Content";

const Community = () => {
  return (
    <div className="max-w-5xl mx-auto px-5 gap-4  flex flex-col md:flex-row py-10">
      <div className="w-full md:w-1/3 ">
        <Sidebar />
      </div>
      <div className="w-full md:w-3/5">
        <Content />
      </div>
    </div>
  );
};

export default Community;
