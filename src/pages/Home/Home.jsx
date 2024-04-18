import React from "react";
import { Tagline } from "./Tagline/Tagline";
import Slider from "./Swiper/swiper";
import  Card  from "./Card/Card";
import { Free } from "./Free/Free";
import { Customers } from "./Customers/Customers";
import { Stay } from "./Stay/Stay";

export const Home = () => {
  return (
    <div>
      <Tagline />
      <Slider />
      <Card />
      <Free />
      <Customers />
      <Stay />
    </div>
  );
};
