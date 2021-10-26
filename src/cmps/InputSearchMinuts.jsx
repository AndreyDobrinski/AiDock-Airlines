import { useState } from "react";

export const InputSearchMinuts = ({ doLoadAirlines }) => {
  const [inputValue, setInputValue] = useState({ flightLength: 800 });

  const [filterBy] = useState("");

  const handleInput = ({ target }) => {
    setInputValue((prevState) => ({
      ...prevState,
      flightLength: target.value,
    }));
    const filter = { ...filterBy, flightLength: parseInt(target.value, 10) };
    doLoadAirlines(filter);
  };
  return (
    <div className="input-search-minuts p-10">
      <div className="input-holder flex auto-center">
        <span>0 Minuts</span>
        <input
          type="range"
          min="0"
          max="800"
          name="flightLength"
          value={inputValue.flightLength}
          onChange={handleInput}
        />
        <span>{inputValue.flightLength} Minuts</span>
      </div>
    </div>
  );
};
