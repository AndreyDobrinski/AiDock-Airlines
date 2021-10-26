import { AirlinePreview } from "../AirlinePreview";

export const AirlineList = ({ airlines }) => {
  if (!airlines) return <div>Loading...</div>;
  return (
    <div className="airline-list mt-20">
      {airlines.map((airline) => (
        <div key={airline._id}>
          <AirlinePreview airline={airline} />
        </div>
      ))}
    </div>
  );
};
