import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="w-full flex flex-row-reverse shadow-md shadow-slate-500/20">
        {/* logo part */}

        {/* <div className="flex-none p-1 order-first mr-2 flex flex-row"> */}
        {/* max-w-xs transition duration-300 ease-in-out hover:scale-75 */}
        <Link href="/" className="flex-none p-1 order-first mr-2 flex flex-row">
          <Image src="/images/logo2.png" alt="logo" width={130} height={50} />
          <Image src="/images/logo.png" alt="logo" width={120} height={100} />
        </Link>
        {/* </div> */}
        {/* menu part in large screen */}
        <div className="shrink w-full p-2 hidden md:block">
          <ul className="list-none flex flex-row-reverse justify-evenly p-4 text-xl font-semibold">
            <li className="text-slate-500 hover:text-orange-500 hover:border-b-2 hover:border-orange-500  transition duration-700">
              <Link href="/">الصفحة الرئيسية</Link>
            </li>
            <li className="text-slate-500 hover:text-orange-500 hover:border-b-2 hover:border-orange-500  transition duration-700">
              <Link href="/shepherds">الرعاه</Link>
            </li>
            <li className="text-slate-500 hover:text-orange-500 hover:border-b-2 hover:border-orange-500  transition duration-700">
              <Link href="/participants">المشاركين</Link>
            </li>
            <li className="text-slate-500 hover:text-orange-500 hover:border-b-2 hover:border-orange-500 transition duration-700">
              <Link href="/map">الخريطة</Link>
            </li>
            <li className="text-slate-500 hover:text-orange-500 hover:border-b-2 hover:border-orange-500 transition duration-700">
              <Link href="/registration">التسجيل</Link>
            </li>
            <li className="text-slate-500 hover:text-orange-500 hover:border-b-2 hover:border-orange-500 transition duration-700">
              <Link href="/newspage">الأخبار</Link>
            </li>
          </ul>
        </div>

        {/* menu part in small screen */}
        <div className="shrink w-full flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-500 hover:text-orange-500 transition duration-700 p-2"
          >
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        className={`flex justify-center md:hidden absolute md:static md:pb-0 md:mt-0 w-full md:w-full shadow-md shadow-slate-500/20 bg-white z-10 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="list-none flex flex-col justify-evenly p-4 space-y-3 text-xl font-semibold">
          <li className="text-slate-500 hover:text-orange-500  transition duration-700 ">
            <Link href="/">الصفحة الرئيسية</Link>
          </li>
          <li className="text-slate-500 hover:text-orange-500 transition duration-700">
            <Link href="/shepherds">الرعاه</Link>
          </li>
          <li className="text-slate-500 hover:text-orange-500 transition duration-700">
            <Link href="/participants">المشاركين</Link>
          </li>
          <li className="text-slate-500 hover:text-orange-500 transition duration-700">
            <Link href="/map">الخريطة</Link>
          </li>
          <li className="text-slate-500 hover:text-orange-500 transition duration-700">
            <Link href="/registration">التسجيل</Link>
          </li>
          <li className="text-slate-500 hover:text-orange-500 transition duration-700">
            <Link href="/newspage">الأخبار</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
