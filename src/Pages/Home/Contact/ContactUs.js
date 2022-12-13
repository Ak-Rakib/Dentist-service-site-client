import React from "react";
import bgImage from '../../../assets/images/appointment.png'
const ContactUs = () => {
  return (
    <div 
    style={{backgroundImage:`url(${bgImage})`,
            height: "550px"
}}
    className="hero mt-32">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm">
            <h1 className="text-center text-color 2xl-text font bold">Contact Us</h1>
            <h1 className="text-center text-3xl text-white">Stay connected with us</h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label"></label>
              <input
                type="email"
                name="email"
                placeholder="email Address"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label"></label>
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label"></label>
              <textarea
                type="text"
                name="message"
                className="textarea textarea-success"
                placeholder="your message"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-back">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
