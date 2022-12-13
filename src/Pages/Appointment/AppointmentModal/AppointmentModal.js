import { format } from "date-fns/esm";
import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const AppointmentModal = ({ modal, date, setModal, refetch }) => {
  const { user } = useContext(AuthContext);
  const { name, slots } = modal;
  const calenderDate = format(date, "PP");

  const modalHandler = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const slot = form.slot.value;
    const number = form.number.value;
    const email = form.email.value;

    const bookingModal = {
      treatmentData: calenderDate,
      treatmentName: modal.name,
      slot,
      patient: name,
      email,
      number,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingModal),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setModal(null);
          console.log(data);
          toast.success("submit successfully");
          refetch()
        } else {
          toast.error(data.message)
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={modalHandler} className="py-4">
            <input
              type="text"
              placeholder="Type here"
              value={calenderDate}
              disabled
              className="input input-bordered input-success w-full mt-2"
            />
            <select name="slot" className="select select-success w-full mt-2">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="name"
              name="name"
              placeholder="Full name"
              defaultValue={user?.displayName}
              disabled
              className="input input-bordered input-success w-full mt-2"
            />
            <input
              type="number"
              name="number"
              placeholder="Phone number"
              className="input input-bordered input-success w-full mt-2"
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              defaultValue={user?.email}
              disabled
              className="input input-bordered input-success w-full mt-2"
            />{" "}
            <br />
            <input
              type="submit"
              value="Submit"
              className="btn btn-success w-full mt-2"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
