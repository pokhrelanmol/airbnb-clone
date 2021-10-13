import React from "react";
import getCenter from "geolib/es/getCenter";
import uniqId from "uniqid";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

const Map = ({ searchResults }) => {
  // tranform api into this format { latitude: 52.516272, longitude: 13.377722 }, so we can use it with map
  const coordinates = searchResults?.map((item) => ({
    longitude: item.longitude,
    latitude: item.latitude,
  }));
  const [selectedLocation, setSelectedLocation] = React.useState({});
  const center = getCenter(coordinates);
  const [viewport, setViewport] = React.useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/pokhrelanmol/ckul4rwesfm5k19nsy30bevqa"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {searchResults.map((item) => (
        <div key={uniqId()}>
          <Marker latitude={item.latitude} longitude={item.longitude}>
            <p
              role="img"
              aria-label="location"
              className="cursor-pointer animate-bounce"
              onClick={() => setSelectedLocation(item)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fe595e"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </p>
          </Marker>
          {/* popup on marker click */}
          {selectedLocation.latitude === item.latitude ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={item.latiude}
              longitude={item.longitude}
            >
              {item.address}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
