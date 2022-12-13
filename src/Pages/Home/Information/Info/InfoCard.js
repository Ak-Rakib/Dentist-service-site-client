import React from "react";
import './InfoCard.css'

const InfoCard = ({ info }) => {
  const { icon, description, name } = info;
  return (
    <div className="card md:card-side bg-base-100 shadow-xl p-6 bg-back text-white">
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
