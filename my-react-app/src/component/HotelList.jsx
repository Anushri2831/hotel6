import React from "react";
import HotelCard from "../component/HotelCard";
import "./HotelList.css";

const hotels = [
  {
    image: "https://source.unsplash.com/200x150/?hotel",
    name: "Hotel Royal Blue",
    location: "Zurich, Switzerland",
    price: 480,
    rating: 4.9,
  },
  {
    image: "https://source.unsplash.com/200x150/?resort",
    name: "Warwick Grand Hotel",
    location: "New York",
    price: 320,
    rating: 5.0,
  }
];

const HotelList = ({ title }) => {
  return (
    <section className="hotel-list">
      <h3 className="hotel-list-title">{title}</h3>
      <div className="hotel-list-container">
        {hotels.map((hotel, index) => (
          <HotelCard key={index} {...hotel} />
        ))}
      </div>
    </section>
  );
};

export default HotelList;