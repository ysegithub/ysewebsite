import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import PartnerCard from "./partnerPrivileges";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

export default function Shepherds() {
  const partners = [
    {
      slide: [
        {
          logo: "/images/shepherds0.png",
          level: "الراعي الماسي",
          // style: "bg-neutral-300 md:w-[50rem] w-60",
          text: "شركة الراعبي للتجارة ومنظومات الطاقة الشمسية هي الرائدة في مجال الطاقة البديلة والمعدات الزراعية وتتميز بتقديم أرقى المواصفات العالمية في مجال الطاقة الشمسية للقطاع الصناعي و الزراعي في اليمن . ",
          comLink: "https://www.alraebi-ye.com/index.html",
          linkName: "رابط الشركة",
          colRoot: "grid md:grid-cols-2 grid-cols-1",
          show: "block",
          hide: "hidden",
          margin: "m-4"
        },
      ],
    },
    {
      slide: [
        {
          logo: "/images/shepherds1.png",
          level: "الراعي الذهبي",
          comLink: "https://garallahsolar.com/",
          linkName: "رابط الشركة",
          // style: "bg-amber-300",
          // colRoot: "flex flex-col items-center",
          show: "hidden",
          hide: "block",
          height: "h-60",
          margin: "m-4"
        },
        {
          logo: "/images/shepherds2.png",
          level: "الراعي الذهبي",
          show: "hidden",
          hide: "block",
          comLink: "http://www.alnasrsolar.com/en/",
          linkName: "رابط الشركة",
          // style: "bg-amber-300",
          // colRoot: "flex flex-col items-center",
        },
      ],
    },
    {
      slide: [
        {
          logo: "/images/home3.png",
          level: "الراعي الفضي",
          show: "hidden",
          height: "h-60",
          margin: "m-4",
          padding: "p-7"
          // style: "bg-neutral-400 ",
          // colRoot: "flex flex-col items-center",
        },
        {
          logo: "/images/shepherds5.png",
          level: "الراعي الفضي",
          show: "hidden",
          height: "h-60",
          margin: "m-4",
          padding: "p-7"
          // style: "bg-neutral-400",
          // colRoot: "flex flex-col items-center",
        },
        {
          logo: "/images/shepherds6.png",
          level: "الراعي الفضي",
          show: "hidden",
          height: "h-60",
          margin: "m-4",
          padding: "p-7"
          // style: "bg-neutral-400 ",
          // colRoot: "flex flex-col items-center",
        },
        {
          logo: "/images/shepherds7.jpg",
          level: "الراعي الفضي",
          show: "hidden",
          height: "h-60",
          margin: "m-4",
          padding: "p-7"
          // style: "bg-neutral-400",
          // colRoot: "flex flex-col items-center",
        },
      ],
    },
  ];
  // const partners = [
  //   {
  //     slide: [
  //       {
  //         url: "/images/1.png",
  //       },
  //     ],
  //   },
  //   {
  //     slide: [
  //       {
  //         url: "/images/2.png",
  //       },
  //     ],
  //   },
  //   {
  //     slide: [
  //       {
  //         url: "/images/3.png",
  //       },
  //     ],
  //   },
  // ];
  // const slides = [
  //   {
  //     url: "/images/slide1.jpg",
  //   },
  //   {
  //     url: "/images/slide2.jpg",
  //   },
  //   {
  //     url: "/images/slide3.jpg",
  //   },

  //   {
  //     url: "/images/slide4.jpg",
  //   },
  //   {
  //     url: "/images/slide5.jpg",
  //   },
  //   {
  //     url: "/images/slide6.jpg",
  //   },
  // ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? partners.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === partners.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
  };
  return (
    <div className="flex flex-col">
      {/* first part */}
      {/* 
      <div className="w-full sm:py-8 py-4 sm:px-4 px-2 border-b-2 border-gray-200">
        <div className="md:h-[570px] h-[270px] sm:w-2/3 w-auto m-auto relative group  ">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full bg-contain bg-no-repeat duration-500"
          ></div>
          Left Arrow
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          Right Arrow
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
        </div>
      </div> */}

      {/* second part */}
      <div className="relative flex flex-col justify-center m-5 mb-6">
        <h1 className="text-orange-500 text-2xl font-bold text-center">
          الرعاه
        </h1>
        <div>
          <button
            onClick={prevSlide}
            className="p-2 m-2 rounded-full bg-white absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 m-2 rounded-full bg-white absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5"
          >
            <FiChevronRight />
          </button>

          
        </div>
         {/* <div>
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
        </div> */}
        <div
          id="content"
          className="carousel flex md:flex-row flex-col items-center justify-center overflow-hidden scroll-smooth scrollbar-hide"
        >
          {/* <PartnerCard /> */}
          {partners[currentIndex].slide.map((partner) => {
            return (
              <div
                key={partner.id}
                className={`p-3 ${partner.colRoot} flex flex-row justify-center ${partner.margin} md:h-96`}
              >
                <div className={`flex flex-col justify-center items-center`}>
                  <Image
                    src={partner.logo}
                    width={300}
                    height={300}
                    alt="logo"
                    className={`p-2 rounded ${partner.height} ${partner.padding}`}
                  />

                  <p className="font-bold text-black p-3 text-xl text-center">
                    {partner.level}
                  </p>
                  <Link
                    href={`${partner.comLink}`}
                    className={`text-right text-blue-800 font-bold md:p-5 ${partner.hide}`}
                  >
                    {partner.linkName}
                  </Link>
                </div>

                <div className={`${partner.show} flex flex-col justify-center items-center`}>
                  <p className={"text-right p-12"}>{partner.text}</p>
                  <Link
                    href={`${partner.comLink}`}
                    className="text-right text-blue-800 font-bold md:p-5"
                  >
                    {partner.linkName}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
