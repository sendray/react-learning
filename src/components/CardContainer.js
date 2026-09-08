import { useEffect, useState } from "react";

import Card from "./Card";
import Shimmer from "./Shimmer";

import { SWIGGY_API } from "../utils/constants";

const CardContainer = () => {
  const [restaurantsDetails, setRestaurantsDetails] = useState([]);
  const [mutableRestaurantsDetails, setMutableRestaurantsDetails] = useState(
    [],
  );
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(SWIGGY_API);
    const resJson = await res.json();

    setRestaurantsDetails(
      resJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setMutableRestaurantsDetails(
      resJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  if (restaurantsDetails.length === 0) return <Shimmer />;

  return (
    <div className="app-body">
      <div className="filter">
        <div className="search">
          <input
            className="search-input"
            type="text"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredResData = restaurantsDetails.filter((res) =>
                res.info.name.includes(inputText),
              );
              setMutableRestaurantsDetails(filteredResData);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const filteredResData = restaurantsDetails.filter(
              (res) => res.info.avgRating > 4.5,
            );
            setMutableRestaurantsDetails(filteredResData);
          }}
        >
          Filter by rating
        </button>
      </div>
      <div className="card-container">
        {mutableRestaurantsDetails.map((restaurant) => (
          <Card key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
