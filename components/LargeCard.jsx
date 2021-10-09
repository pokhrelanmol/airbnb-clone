import Image from "next/image";
const LargeCard = () => {
  return (
    <section className="relative py-16 cursor-pointer  ">
      <div className="min-w[300px] h-64 relative ">
        <Image
          src="https://a0.muscache.com/im/pictures/5b4dc94a-0b4c-4c27-b50f-9c5a5b93c775.jpg?im_w=720"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className=" absolute top-28 left-16 space-y-3">
        <h1 className="font-bold text-2xl text-white ">Try hosting</h1>
        <p className="text-white">
          Earn Extra income and unlock new <br /> opportunity by sharing your
          space
        </p>
        <button className="px-6 py-3 bg-white rounded-xl ">Learn more</button>
      </div>
    </section>
  );
};

export default LargeCard;
