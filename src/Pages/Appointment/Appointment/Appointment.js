import React, { useState } from "react";
import AppointmentTime from "../AppointmentTime/AppointmentTime";
import AppointmentBanner from "./AppointmentBanner/AppointmentBanner";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AppointmentTime date={date}></AppointmentTime>
    </div>
  );
};

export default Appointment;
