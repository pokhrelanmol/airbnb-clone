import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" relative  h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        layout="fill"
        objectFit="cover"
        src="https://links.papareact.com/0fm"
      />
      <div className="absolute top-1/2 w-full text-center  ">
        <p className="text-md md:text-lg pb-4 text-gray-700 font-semibold">
          Not sure where to go? Perfect.
        </p>
        <button className="bg-white shadow-md active:scale-90 transition-all duration-200  hover:shadow-xl   py-4 px-6 lg:py-5 lg:px-8 lg:text-lg text-indigo-700 font-medium rounded-full">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Hero;
