import React from "react";
import doctor from "../../../assets/images/doctor-small.png";
import appointment from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
  return (
    <div 
    style={{backgroundImage: `url(${appointment})`,
            height: "455px"
  }}
    className="hero  lg:mt-52 mt-32">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={doctor}
          className="hidden md:block lg:w-1/2 rounded-lg -mt-32"
          alt=""
        />
        <div className="mr-3">
          <h1 className="text-2xl font-bold text-color">Appointment</h1>
          <h1 className="text-3xl font-bold text-white">Make an appointment Today</h1>
          <p className="py-6 text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
