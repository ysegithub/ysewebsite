import Image from "next/image";
import React from "react";

export default function MapPop() {
  function handelClose(){
    location.href='/'
  }
  return (
    <div
      className="fixed bg-black inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      onClick={handelClose}
    >
      <div className="bg-white rounded-lg flex justify-center items-center w-auto">
        <Image src="/images/mapwidth.png" width={500} height={500} alt="map" className="w-full"/>
      </div>
    </div>
  );
}
