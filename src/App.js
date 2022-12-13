import { RouterProvider } from "react-router-dom";
import "./App.css";
import { route } from "./Route/Route/Route";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="mx-width">
      <RouterProvider router={route}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
