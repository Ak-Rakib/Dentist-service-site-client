import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyAppointment = () => {
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/booking?email=${user?.email}`

    const { data: bookings = []} = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
              headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
              }
            })
            const data = await res.json();
            return data;
        }
    })
  return (
    <div>
      <h1 className="text-3xl mb-6">My Appointment</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {
                bookings.map((booking, index) => <tr>
                    <th>{index+1}</th>
                    <td>{booking.patient}</td>
                    <td>{booking.treatmentName}</td>
                    <td>{booking.slot}</td>
                    <td>{booking.treatmentData}</td>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
