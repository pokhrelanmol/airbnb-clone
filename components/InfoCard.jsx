import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  long,
  lat,
}) => {
  return (
    <div className="flex py-7 px-2 border-b first:border-t-2 hover:opacity-90 hover:shadow-lg transition duration-200 transform ease-out">
      <div className="  h-28 w-48   md:h-52 md:w-80 relative flex-shrink-0 cursor-pointer ">
        <Image
          src={img}
          objectFit="cover"
          layout="fill"
          className="rounded-2xl"
        />
      </div>
      <div className=" flex flex-col flex-grow pl-5 cursor-pointer pr-3 ">
        <div className="flex justify-between ">
          <p>{location}</p>
          <HeartIcon className="h-7  cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between">
          <p className="flex items-centers">
            <StarIcon className="h-5 text-red-400 " />
            {star}
          </p>
          <div className="">
            <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
