import React from "react";
import bannerImg from '../../../assets/images/chair.png'
import './Banner.css'

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse pr-8">
        <img
          src={bannerImg}
          className=" lg:w-1/2 rounded-lg shadow-2xl" alt=""
        />
        <div className="pl-8">
          <h1 className="text-5xl font-bold">Your new smile start here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
