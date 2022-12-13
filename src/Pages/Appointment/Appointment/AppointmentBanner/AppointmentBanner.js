import chair from "../../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";


const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse lg:w-1/2">
        <img src={chair} alt="dentist chair" className=" rounded-lg" />
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
