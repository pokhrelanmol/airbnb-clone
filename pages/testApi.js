import axios from "axios";
import React, { useState } from "react";

const testApi = ({ getLocationData, getHotelDetailsDatas }) => {
  const [destinationId, setDestinationId] = useState("");
  //   getLocationData && setDestinationId(getLocationData.dest_id);
  return (
    <div>
      this is test api page
      {/* <img src={getHotelListDatas.main_photo_ur} alt="" /> */}
      {/* <p>{JSON.stringify(getHotelDetailsDatas[0])}</p> */}
    </div>
  );
};

export default testApi;

// export const getServerSideProps = async () => {
// first try to get the destination id from this endpoint the search for hotels using this id
//   const optionsToGetLocation = {
//     method: "GET",
//     url: "https://booking-com.p.rapidapi.com/v1/hotels/locations",
//     params: { name: "gangtok", locale: "en-gb" },
//     headers: {
//       "x-rapidapi-host": "booking-com.p.rapidapi.com",
//       "x-rapidapi-key": "145f049ea3msh553a0d66377dfb5p17847fjsnf2c24e7bcb93",
//     },
//   };

let getLocationData;
try {
  const getLocation = await axios.request(optionsToGetLocation);

  getLocationData = await getLocation.data[1];
} catch {
  console.log("error");
}

//   //   now lets grab the list of hotel using destination id
//   const getHotelLists = {
//     method: "GET",
//     url: "https://booking-com.p.rapidapi.com/v1/hotels/search",
//     params: {
//       locale: "en-gb",
//       room_number: "1",
//       checkout_date: "2021-11-26",
//       order_by: "popularity",
//       units: "metric",
//       adults_number: "2",
//       filter_by_currency: "INR",
//       checkin_date: "2021-11-25",
//       dest_type: "hotel",
//       dest_id: getLocation.data.id,
//       children_number: "2",
//       page_number: "0",
//       categories_filter_ids: "facility::107,free_cancellation::1",
//       children_ages: "5,0",
//     },
//     headers: {
//       "x-rapidapi-host": "booking-com.p.rapidapi.com",
//       "x-rapidapi-key": "145f049ea3msh553a0d66377dfb5p17847fjsnf2c24e7bcb93",
//     },
//   };

//   try {

//     const getHotelDetails = await axios.request(getHotelLists);
//     const getHotelDetailsDatas = await getHotelDetails.data.result;

//     return {
//       props: {
//         getLocationData,
//         getHotelDetailsDatas,
//       },
//     };
//   } catch (error) {
//     console.log(error.message);
//   }
// };
