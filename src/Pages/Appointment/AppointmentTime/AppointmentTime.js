import { format } from "date-fns";
import React, { useState } from "react";
import AppointmentModal from "../AppointmentModal/AppointmentModal";
import AppointmentTimeCard from "./AppointmentTimeCard";
import { useQuery } from '@tanstack/react-query';

const AppointmentTime = ({ date }) => {
  // const [appointment, setAppointment] = useState([]);
  const [modal, setModal] = useState(null);
  const calenderDate = format(date, "PP" )

  // ---------------------- use react query ---------------------
  const {data : appointment = [], refetch} = useQuery({
        queryKey: ['appointments', calenderDate],
        queryFn: () => fetch(`http://localhost:5000/appointments?calenderDate=${calenderDate}`)
        .then((res) => res.json())
  })
  // --------------------- End ----------------------------------

  // useEffect(() => {
  //   fetch("http://localhost:5000/appointments")
  //     .then((res) => res.json())
  //     .then((data) => setAppointment(data));
  // }, []);

  return (
    <div className="mt-9">
      <p className="text-center text-color font-bold">
        Available Appointments on {format(date, "PP")}
      </p>
      <div className="grid gap-4 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {appointment.map((a) => (
          <AppointmentTimeCard
            key={a._id}
            appointment={a}
            setModal={setModal}
          ></AppointmentTimeCard>
        ))}
      </div>
      {modal && (
        <AppointmentModal
          modal={modal}
          date={date}
          setModal={setModal}
          refetch={refetch}
        ></AppointmentModal>
      )}
    </div>
  );
};

export default AppointmentTime;
