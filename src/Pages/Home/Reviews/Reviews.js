import React from "react";
import profile1 from "../../../assets/images/people1.png";
import profile2 from "../../../assets/images/people2.png";
import profile3 from "../../../assets/images/people3.png";
import ReviewsCard from "./ReviewsCard";

const Reviews = () => {
  const reviewData = [
    {
      id: 1,
      name: "Winson herry",
      img: profile1,
      location: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },

    {
      id: 2,
      name: "Winson herry",
      img: profile2,
      location: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },

    {
      id: 3,
      name: "Winson herry",
      img: profile3,
      location: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <div className="mt-14">
      <div>
        <h1 className="text-2xl font-bold text-color">Testimonial</h1>
        <h1 className="text-3xl">What Our Patients Says</h1>
      </div>
      <div className='grid gap-8 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
            reviewData.map(review => <ReviewsCard
                key={review.id}
                review = {review}
            ></ReviewsCard>)
        }
      </div>
      <div className="text-center mt-8">
        <button className="btn btn-primary bg-back">See All Review</button>
      </div>
    </div>
  );
};

export default Reviews;
