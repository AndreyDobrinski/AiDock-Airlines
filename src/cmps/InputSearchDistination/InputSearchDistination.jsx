import { useState } from "react";

export const InputSearchDistination = ({doLoadAirlines}) => {

    const [inputOriginValue, setInputOriginValue] = useState('')

    const [filterBy] = useState('')

    const handleInput = ({ target }) => {
        setInputOriginValue(target.value)
        const filter = { ...filterBy, "destination": target.value }
        doLoadAirlines(filter)


    }
  return (
    <div className="input-search-destination p-10">
      <div className="input-holder flex auto-center">
        <input
          name="destination"
          value={inputOriginValue}
          onChange={handleInput}
          placeholder="Search by destination"
        />
      </div>
    </div>
  );
};
