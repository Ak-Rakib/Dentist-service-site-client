import React from "react";
import Banner from "../Banner/Banner";
import ContactUs from "../Contact/ContactUs";
import Info from "../Information/Info/Info";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Reviews from "../Reviews/Reviews";
import Exceptional from "../Service/Exceptional";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <Info></Info>
      <Service></Service>
      <Exceptional></Exceptional>
      <MakeAppointment></MakeAppointment>
      <Reviews></Reviews>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
