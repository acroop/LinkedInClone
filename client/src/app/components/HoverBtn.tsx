"use client"
import React, { useState } from "react";

const HoverBtn = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed bottom-4 right-4 flex flex-col items-end space-y-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <>
          <div className="transform transition duration-300 cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
            <img src="/jobie.svg" alt="" className=" w-8"/>
          </div>
          <div className="transform transition duration-300 cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
            <img src="/careerbot.svg" alt="" className=" w-8" />
          </div>
        </>
      )}
      <div className="transform transition duration-300 cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
        <img src="/robot.svg" alt="" className=" w-8" />
      </div>
    </div>
  );
};

export default HoverBtn;
