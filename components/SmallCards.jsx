import Image from "next/image";
const SmallCards = ({ image, location, distance }) => {
  return (
    <div className="flex mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {/* left */}
      <div className="relative h-16 w-16  ">
        <Image src={image} layout="fill" className="rounded-lg" />
      </div>
      {/* right */}
      <div className="">
        <h3 className="text-lg font-medium  ">{location}</h3>
        <p>{distance}</p>
      </div>
    </div>
  );
};

export default SmallCards;
