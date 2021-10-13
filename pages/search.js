import Header from "../components/Header";
import Footer from "../components/Footer";
import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import uniqId from "uniqid";
import InfoCard from "../components/InfoCard";
import axios from "axios";
import Map from "../components/Map";
const formatDate = (dateInString) => {
  return format(new Date(dateInString), "yyyy-MM-dd");
};
const Search = ({ getHotelDetailsDatas }) => {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  return (
    <div>
      <Header
        placeholder={` ${location} - ${formatDate(startDate)} - ${formatDate(
          endDate
        )}`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays from
            <span className="p-1 bg-red-400 rounded-xl text-white mx-1">
              {formatDate(startDate)}
            </span>
            to
            <span className="p-1 bg-red-400  rounded-xl text-white mx-1">
              {formatDate(endDate)}
            </span>
            for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold my-8">Stays in {location}</h1>
          <div className="hidden lg:inline-flex mb-5 gap-3 whitespace-nowrap text-gray-800">
            <p className="button">Cancellation flexibility</p>
            <p className="button">Types of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms And Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className="flex flex-col">
            {getHotelDetailsDatas.map((items) => (
              <a href={items.url}>
                <InfoCard
                  key={uniqId()}
                  img={items.main_photo_url}
                  location={items.address}
                  title={items.hotel_name}
                  description={items.address}
                  star={items.class}
                  price={items.price_breakdown.all_inclusive_price}
                  total={items.price_breakdowngross_price}
                  long={items.latitude}
                  lat={items.longitude}
                />
              </a>
            ))}
          </div>
        </section>
        <section className="hidden lg:inline-flex lg:min-w-[500px]">
          <Map searchResults={getHotelDetailsDatas} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
// special name function for server side rendering in next js

export const getServerSideProps = async (context) => {
  // first try to get the destination id from this endpoint the search for hotels using this id
  const { location, startDate, endDate, noOfGuests } = context.query;
  const optionsToGetLocation = {
    method: "GET",
    url: "https://booking-com.p.rapidapi.com/v1/hotels/locations",
    params: { name: location, locale: "en-gb" },
    headers: {
      "x-rapidapi-host": "booking-com.p.rapidapi.com",
      "x-rapidapi-key": "145f049ea3msh553a0d66377dfb5p17847fjsnf2c24e7bcb93",
    },
  };

  let getLocationData;
  try {
    const getLocation = await axios.request(optionsToGetLocation);
    getLocationData = await getLocation.data[1];
    console.log(getLocationData.dest_id);
  } catch {
    console.log("error");
  }

  //   now lets grab the list of hotel using destination id
  const getHotelLists = {
    method: "GET",
    url: "https://booking-com.p.rapidapi.com/v1/hotels/search",
    params: {
      locale: "en-gb",
      room_number: "1",
      checkout_date: formatDate(endDate),
      order_by: "popularity",
      units: "metric",
      adults_number: noOfGuests,
      filter_by_currency: "INR",
      checkin_date: formatDate(startDate),
      dest_type: "hotel",
      dest_id: getLocationData.dest_id,
      children_number: "2",
      page_number: "0",
      categories_filter_ids: "facility::107,free_cancellation::1",
      children_ages: "5,0",
    },
    headers: {
      "x-rapidapi-host": "booking-com.p.rapidapi.com",
      "x-rapidapi-key": "145f049ea3msh553a0d66377dfb5p17847fjsnf2c24e7bcb93",
    },
  };

  try {
    const getHotelDetails = await axios.request(getHotelLists);
    console.log(getHotelDetails);
    const getHotelDetailsDatas = await getHotelDetails.data.result;

    return {
      props: {
        getHotelDetailsDatas,
      },
    };
  } catch (err) {
    console.log(err.message);
  }
};
