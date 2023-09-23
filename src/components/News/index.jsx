import React from "react";
import Image from "next/image";
import { allNews } from "./news";

export default function News() {
  return (
    <div className="flex flex-row flex-wrap justify-evenly">
      {allNews &&
        allNews.map((singleNews) => {
          return (
            <div
              key={singleNews.id}
              className="md:w-[80%] md:h-52 h-full flex md:flex-row-reverse flex-col m-4 border border-black rounded-lg bg-white"
            >
              <Image
                src={singleNews.image}
                alt="news"
                width={500}
                height={500}
                className="border md:w-2/3 w-full"
              />
              <div>
                <h1 className="p-2 text-center font-semibold">
                  {singleNews.title}
                </h1>
                <p className="p-2 text-right">{singleNews.description}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
