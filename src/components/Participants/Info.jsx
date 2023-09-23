import React from "react";
import Image from "next/image";

export default function Info() {
  const participantionInfo = [
    {
      id: "1",
      name: "الاسم",
      BoothNumber: "10",
      contact: "77777777777",
      image: "/images/logo.png",
    },
    {
        id: "1",
        name: "الاسم",
        BoothNumber: "10",
        contact: "77777777777",
        image: "/images/logo.png",
      },
      {
        id: "1",
        name: "الاسم",
        BoothNumber: "10",
        contact: "77777777777",
        image: "/images/logo.png",
      },
      {
        id: "1",
        name: "الاسم",
        BoothNumber: "10",
        contact: "77777777777",
        image: "/images/logo.png",
      },
      {
        id: "1",
        name: "الاسم",
        BoothNumber: "10",
        contact: "77777777777",
        image: "/images/logo.png",
      },
      {
        id: "1",
        name: "الاسم",
        BoothNumber: "10",
        contact: "77777777777",
        image: "/images/logo.png",
      },
      {
        id: "1",
        name: "الاسم",
        BoothNumber: "10",
        contact: "77777777777",
        image: "/images/logo.png",
      },
  ];
  return (
    <>
      {participantionInfo.map((info) => {
        return (
          <div key={info.id}>
            <div className="flex flex-col items-center m-3 w-56">
              <div className="h-56  flex items-center">
                <Image
                  src={info.image}
                  width={500}
                  height={500}
                  alt="image"
                  className="p-4"
                />
              </div>

              <p className="text-black p-1">
                <span className="font-bold text-slate-500"> اسم المشارك : </span>
                {info.name}
              </p>
              <p className="text-black p-1">
                <span className="font-bold text-slate-500"> رقم البوث : </span>
                {info.BoothNumber}
              </p>
              <p className="text-black p-1">
                <span className="font-bold text-slate-500"> اتصال : </span>
                {info.contact}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
