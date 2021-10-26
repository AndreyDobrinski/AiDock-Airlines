import { useState } from "react";

export const InputSearchDistination = ({doLoadAirlines}) => {

    const [inputValue, setInputValue] = useState('')

    const [filterBy] = useState('')

    const handleInput = ({ target }) => {
        setInputValue(target.value)
        const filter = { ...filterBy, "destination": target.value }
        doLoadAirlines(filter)


    }
  return (
    <div className="input-search-destination p-10">
      <div className="input-holder flex auto-center">
        <input
          name="destination"
          value={inputValue}
          onChange={handleInput}
          placeholder="Search by destination"
        />
      </div>
    </div>
  );
};
