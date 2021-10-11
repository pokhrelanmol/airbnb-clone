import Header from "../components/Header";
import Footer from "../components/Footer";
import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import uniqId from "uniqid";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
const Search = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formatDate = (dateInString) => {
    return format(new Date(dateInString), "dd MMMM yy");
  };
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
            {searchResults.map(
              ({
                img,
                location,
                title,
                description,
                star,
                price,
                total,
                long,
                lat,
              }) => (
                <InfoCard
                  key={uniqId()}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                  long={long}
                  lat={lat}
                />
              )
            )}
          </div>
        </section>
        <section className="hidden lg:inline-flex lg:min-w-[500px]">
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
// special name function for server side rendering in next js

export const getServerSideProps = async () => {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
};
