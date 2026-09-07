import { useState } from "react";
import { createRoot } from "react-dom/client";

import Header from "./components/Header";
import CardContainer from "./components/CardContainer";

import { restaurantsData } from "./utils/mockData";

const App = () => {
  const [restaurantsDetails, setRestaurantsDetails] = useState(restaurantsData);

  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <div className="filter">
          <button
            onClick={() => {
              const filteredResData = restaurantsDetails.filter(
                (res) => res.info.avgRating > 4.5,
              );
              setRestaurantsDetails(filteredResData);
            }}
          >
            Filter by rating
          </button>
        </div>
        <CardContainer restaurantsDetails={restaurantsDetails} />
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
