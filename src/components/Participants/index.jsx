import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Info from "./Info";

export default function Participants() {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
  };
  return (
    <div>
      <div className="relative flex flex-col justify-center m-5">
        <h1 className="text-orange-500 text-2xl font-bold text-center mt-2">
          المشاركين
        </h1>
        <div>
          <button
            onClick={scrollLeft}
            className="p-2 m-2 rounded-full bg-white absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 m-2 rounded-full bg-white absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5"
          >
            <FiChevronRight />
          </button>
        </div>
        <div
          id="content"
          className="carousel p-4 flex md:mx-8 items-center justify-start overflow-hidden scroll-smooth scrollbar-hide"
        >
          <Info />
        </div>
      </div>
    </div>
  );
}
