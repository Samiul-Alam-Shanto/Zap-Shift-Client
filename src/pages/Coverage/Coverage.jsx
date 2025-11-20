import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const mapData = useLoaderData();
  // console.log(mapData);
  const position = [23.8041, 90.4152];
  const mapRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;

    const desiredLocation = mapData.find((d) =>
      d.district.toLowerCase().includes(searchText.toLowerCase())
    );
    if (desiredLocation) {
      const coOrd = [desiredLocation.latitude, desiredLocation.longitude];
      mapRef.current.flyTo(coOrd, 12);
    }
  };
  return (
    <div className="py-10">
      <h2 className="font-bold text-4xl text-secondary text-left pb-10">
        We are available in 64 districts
      </h2>
      <div className="pb-10">
        <form onSubmit={handleSearch}>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input name="search" type="search" required placeholder="Search" />
          </label>
        </form>
      </div>
      <div>
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[800px]"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {mapData.map((data) => (
            <Marker position={[data.latitude, data.longitude]}>
              <Popup>
                <strong>{data.city}</strong>, Centers :{" "}
                {data.covered_area.join(" ,")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
