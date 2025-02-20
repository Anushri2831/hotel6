import React from "react";
import HotelCard from "./HotelCard";

export default {
  title: "component/HotelCard",
  components: HotelCard,
};

const Template = (args) => <HotelCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: "https://source.unsplash.com/200x150/?hotel",
  name: "Hotel Royal Blue",
  location: "Zurich, Switzerland",
  price: 480,
  rating: 4.9,
};