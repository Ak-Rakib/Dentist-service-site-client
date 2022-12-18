import { createBrowserRouter } from "react-router-dom";
import MyAppointment from "../../Dashboard/MyAppointment/MyAppointment";
import AllUsers from "../../Layout/AllUsers";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Share/Login/Login";
import Register from "../../Pages/Share/Register/Register";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element: <MyAppointment></MyAppointment>
      },
      {
        path: '/dashboard/users',
        element: <AllUsers></AllUsers>
      },
    ]
  }
]);
