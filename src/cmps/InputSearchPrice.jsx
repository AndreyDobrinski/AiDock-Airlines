import { useState } from "react";

export const InputSearchPrice = ({doLoadAirlines}) => {
  const [inputValue, setInputValue] = useState({ price: 300 });

  const [filterBy] = useState("");

  const handleInput = ({ target }) => {
    setInputValue(prevState =>({
        ...prevState,
        price: target.value
    }))
    const filter = { ...filterBy, price: parseInt(target.value, 10) };
    doLoadAirlines(filter);
  };
  return (
    <div className="input-search-price p-10">
      <div className="input-holder flex auto-center">
        <span>0$</span>
        <input
          type="range"
          min="0"
          max="300"
          name="price"
          value={inputValue.price}
          onChange={handleInput}
        />
        <span>{inputValue.price}$</span>
      </div>
    </div>
  );
};
