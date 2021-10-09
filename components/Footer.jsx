const Footer = () => {
  return (
    <div className=" grid  grid-cols-2 lg:grid-cols-4 gap-3 p-5">
      <div className=" text-xs text-gray-800 space-y-2">
        <h1 className="font-bold">About</h1>
        <p className=" hover:underline cursor-pointer hover:text-gray-500 ">
          How Airbnb works
        </p>
        <p className=" hover:underline cursor-pointer hover:text-gray-500 ">
          Investors
        </p>
        <p className=" hover:underline cursor-pointer hover:text-gray-500 ">
          HotelTonight
        </p>
        <p className=" hover:underline cursor-pointer hover:text-gray-500 ">
          Careers
        </p>
      </div>

      <div className=" text-xs text-gray-800 space-y-2">
        <h1 className="font-bold">Community</h1>
        <p className=" hover:underline cursor-pointer hover:text-gray-500 ">
          Diversity & Belonging
        </p>
        <p className=" hover:underline cursor-pointer hover:text-gray-500 ">
          Host Afghan refugees
        </p>
      </div>
      <div className=" text-xs text-gray-800 space-y-2">
        <h1 className="font-bold">Host</h1>
        <p className=" hover:underline cursor-pointer hover:text-gray-500 ">
          Responsible hosting
        </p>
        <p className=" hover:underline cursor-pointer hover:text-gray-500 ">
          Host your home
        </p>
      </div>
      <div className=" text-xs text-gray-800 space-y-2">
        <h1 className="font-bold">Support</h1>
        <p className=" hover:underline cursor-pointer hover:text-gray-500 ">
          Our COVID-19 Response
        </p>
        <p className=" hover:underline cursor-pointer hover:text-gray-500 ">
          Neighbourhood Support
        </p>
      </div>
    </div>
  );
};

export default Footer;
