import { useState } from "react";
import { useEffect } from "react";
import { AirlineList } from "../../cmps/AirlineList/AirlineList";
import { InputSearchDate } from "../../cmps/InputSearchDate";
import { InputSearchDistination } from "../../cmps/InputSearchDistination/InputSearchDistination";
import { InputSearchFinalDistination } from "../../cmps/InputSearchFinalDistination";
import { InputSearchMinuts } from "../../cmps/InputSearchMinuts";
import { InputSearchOrigin } from "../../cmps/InputSearchOrigin";
import { InputSearchPrice } from "../../cmps/InputSearchPrice";
import { airlineService } from "../../services/airlineService";

export const Home = () => {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    loadAirlines();
  }, []);

  const loadAirlines = async (filterBy) => {
    const airlines = await airlineService.query(filterBy);
    setAirlines(airlines);
  };
  const doLoadAirlines = (filterBy) => {
    loadAirlines(filterBy);
  };

  return (
    <div className="app-home">
      <div className="content pt-100 container">
        <div className="inputs-holder flex justify-between mt-10">
          <InputSearchOrigin doLoadAirlines={doLoadAirlines} />
          <InputSearchDistination doLoadAirlines={doLoadAirlines} />
          <InputSearchMinuts doLoadAirlines={doLoadAirlines} />
          <InputSearchPrice doLoadAirlines={doLoadAirlines} />
          <InputSearchDate doLoadAirlines={doLoadAirlines} />
        </div>
        <div>
          <InputSearchFinalDistination doLoadAirlines={doLoadAirlines} />
        </div>
        <h1 className="text-center m-10">Planes List</h1>
        <AirlineList airlines={airlines} />
      </div>
    </div>
  );
};
