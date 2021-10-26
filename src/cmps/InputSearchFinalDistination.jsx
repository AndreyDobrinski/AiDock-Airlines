import { useState } from "react";

export const InputSearchFinalDistination = ({ doLoadAirlines }) => {
  const [finalDestination, setfinalDestination] = useState({
    origin: "",
    destination: "",
  });

  const handleInput = async (ev) => {
    const { name, value } = ev.target;
    setfinalDestination((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const doSearch = (ev) => {
    ev.preventDefault();
    // console.log("finalDestination:", finalDestination);
    doLoadAirlines(finalDestination);
  };

  return (
    <div className="input-search-final p-10 flex column auto-center">
      <form action="" onSubmit={doSearch} className="flex">
        <div className="input-holder flex auto-center mr-25">
          <input
            name="origin"
            value={finalDestination.origin}
            onChange={handleInput}
            placeholder="From where"
          />
        </div>

        <div className="input-holder flex auto-center mr-25">
          <input
            name="destination"
            value={finalDestination.destination}
            onChange={handleInput}
            placeholder="Search by destination"
          />
        </div>

        <button>Search</button>
      </form>
    </div>
  );
};
