import React from "react";

export const Card = ({ imgURL, title }) => {
  return (
    <div className="w-full h-80 bg-sky-100 rounded-md shadow sm:w-72 overflow-hidden">
      <div className="flex justify-center relative">
        <img
          src={imgURL}
          alt="image card"
          className="w-full h-[180px] object-cover"
        />
        <h3 className="text-lg font-bold text-[#001c41] mb-1 absolute bottom-0 z-10 uppercase">
          {title}
        </h3>
        <span className="gradient-card absolute bottom-0 w-full h-10"></span>
      </div>
      <p className="p-4 text-center text-[#001c41]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus ab
        fuga est molestiae repellat.
      </p>
    </div>
  );
};
