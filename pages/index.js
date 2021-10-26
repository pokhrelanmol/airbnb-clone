import { SearchIcon } from "@heroicons/react/solid";
import Head from "next/head";
import image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCards from "../components/SmallCards";
import uniqId from "uniqid";
export default function Home({ exploreData, cardData }) {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
      </Head>
      <Header />
      <Hero />
      {/* main */}
      <main className="max-w-7xl mx-auto px-5 sm:px-16">
        <section>
          <h2 className=" text-3xl lg:text-5xl font-semibold pb-5 pt-6">
            Explore Nearby
          </h2>
          {/* pull data from the server */}
          <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCards
                key={uniqId()}
                image={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className=" text-3xl lg:text-5xl font-semibold pb-5 pt-6">
            Live Anywhere
          </h2>
          <div className="flex space-x-5 overflow-scroll scrollbar-hide">
            {cardData?.map(({ img, title }) => (
              <MediumCard key={uniqId()} image={img} title={title} />
            ))}
          </div>
        </section>
        <section>
          <LargeCard />
        </section>
      </main>
      <footer className="max-w-7xl mx-auto px-5 sm:px-16">
        <Footer />
      </footer>
    </div>
  );
}
export const getStaticProps = async () => {
  const exploreData = await fetch("https://links.papareact.com/pyp")
    .then((res) => res.json())
    .catch(console.log(Error));
  const cardData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData,
      cardData,
    },
  };
};
