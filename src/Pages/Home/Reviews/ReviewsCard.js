import React from "react";

const ReviewsCard = ({ review }) => {
  const { img, description, name, location } = review;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{description}</p>
        <div className="card-actions flex items-center mt-2">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt=""/>
            </div>
          </div>
          <div className="ml-2">
            <h1>{name}</h1>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
