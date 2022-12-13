import React from "react";


const AppointmentTimeCard = ({ appointment, setModal }) => {
  const { name, slots } = appointment;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-color justify-center font-bold">
          {name}
        </h2>
        <p className="text-center">
          {slots.length ? <p>{slots[0]}</p> : <p>Try next day</p>}
        </p>
        <p className="text-center">
          {slots.length > 0 ? (
            <p>{slots.length} Spaces Available</p>
          ) : (
            <p>{slots.length} Space Available</p>
          )}
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            onClick={() => setModal(appointment)}
            htmlFor="booking-modal"
            className="btn btn-primary bg-back"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentTimeCard;
