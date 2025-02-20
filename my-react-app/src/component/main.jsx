import React from "react";
import Header from "../component/Header";
import CategoryTabs from "../component/CategoryTabs";
import HotelList from "../component/HotelList";
import BottomNavigation from "../component/BottomNavigation";
import "./main.css";

const main = () => {
  return (
    <div className="hotel-booking-app">
      <Header />
      <CategoryTabs />
      <HotelList title="Popular Hotels" />
      <HotelList title="Low Cost Hotels" />
      <BottomNavigation />
    </div>
  );
};

export default main;