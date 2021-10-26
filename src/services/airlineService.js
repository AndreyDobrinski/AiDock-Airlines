import { DbService } from "./db-service";

export const airlineService = {
  query,
};

const KEY = "airlines";

async function query(filterBy) {
  var airlines = await DbService.query(KEY);
  if (!airlines || !airlines.length) {
    airlines = _airlinesQuery();
    await DbService.insert(KEY, airlines);
  }
  if (!filterBy) {
    return airlines;
  } else {
    const airlinesForDisplay = airlines.filter((airline) => {
      console.log('FilterBy' , filterBy);

      if (filterBy.origin || filterBy.origin === "") {

        const regex = new RegExp(filterBy.origin, "i");
        return regex.test(airline.origin);

      } else if (filterBy.destination || filterBy.destination === "") {

        const regex = new RegExp(filterBy.destination, "i");
        return regex.test(airline.destination);

      } else if(filterBy.flightLength || filterBy.flightLength === 0){

        const regex = new RegExp(filterBy.origin, "i");
        return regex.test(airline.origin) &&  airline.flightLength <= filterBy.flightLength
        
      } else if(filterBy.date || filterBy.date === ""){

        const regex = new RegExp(filterBy.date, "i");
        return regex.test(airline.date) 

      }else {

        const regex = new RegExp(filterBy.origin, "i");
        return regex.test(airline.origin) && airline.price <= filterBy.price 
        
      }

    });
    return airlinesForDisplay;
  }
}

function _airlinesQuery() {
  return [
    {
      _id: "101",
      origin: "Tel Aviv",
      destination: "Tokyo",
      flightLength: 255,
      price: 80,
      date:"2021-10-19"
    },
    {
      _id: "102",
      origin: "Tel Aviv",
      destination: "Moskva",
      flightLength: 144,
      price: 255,
      date:"2021-10-09"
    },
    {
      _id: "103",
      origin: "Tel Aviv",
      destination: "New York",
      flightLength: 744,
      price: 213,
      date:"2021-10-29"
    },
    {
      _id: "104",
      origin: "Tokyo",
      destination: "Eilat",
      flightLength: 287,
      price: 751,
      date:"2021-10-29"
    },
    {
      _id: "105",
      origin: "Tokyo",
      destination: "Berlin",
      flightLength: 87,
      price: 21,
      date:"2021-10-11"
    },
    {
      _id: "106",
      origin: "Berlin",
      destination: "Dubai",
      flightLength: 355,
      price: 98,
      date:"2021-10-12"
    },
  ];
}
