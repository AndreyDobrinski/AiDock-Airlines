import { FaLongArrowAltRight } from "react-icons/fa";

export const AirlinePreview = ({ airline }) => {


  return (
    <div className="airline-preview ">
      <div className="destination-holder flex">
        <h1>{airline.origin}</h1>
        <div className="flex auto-center">
          <FaLongArrowAltRight />
        </div>
        <h1>{airline.destination}</h1>
      </div>

      <div className="other-details flex">
        <p>Flight length: {airline.flightLength} minuts</p>
        <p>Price: {airline.price}$</p>
      </div>
    </div>
  );
};
