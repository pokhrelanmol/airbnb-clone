import Image from "next/image";
const MediumCard = ({ image, title }) => {
  return (
    <div className="cursor-pointer p-3 hover:scale-105 space-y-2 transform transition duration-300 ease-out">
      <div className="relative w-64 h-64 ">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          className="rounded-xl "
        />
      </div>
      <h2 className="text-2xl">{title}</h2>
    </div>
  );
};
export default MediumCard;
