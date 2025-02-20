import React from "react";
import HotelList from "./HotelList";

export default {
  title: "component/HotelList",
  component: HotelList,
};

export const PopularHotels = () => <HotelList title="Popular Hotels" />;
export const LowCostHotels = () => <HotelList title="Low Cost Hotels" />;