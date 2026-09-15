import { useEffect, useState } from "react";
import { Link } from "react-router";

import Card from "./Card";
import Shimmer from "./Shimmer";

import { MOCK_SERVER_USERS_LIST_API } from "../utils/constants";

const CardContainer = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [mutableUserDetails, setMutableUserDetails] = useState([]);
  // const [inputText, setInputText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(MOCK_SERVER_USERS_LIST_API);
    const resJson = await res.json();

    setUserDetails(resJson);
    setMutableUserDetails(resJson);
  };

  if (userDetails.length === 0) return <Shimmer />;

  return (
    <div className="w-full box-border px-4 sm:px-6 md:px-12">
      <div className="filter">
        <div className="search my-5">
          <input
            className="p-4 h-10 w-full max-w-125
            border border-solid 
            border-(--border) hover:border-(--border-hover)
            bg-(--elm-bg) hover:bg-(--elm-bg-hover)"
            type="text"
            // value={inputText}
            placeholder="Search by name"
            onChange={(e) => {
              if (e.target.value?.length >= 3) {
                const filteredResData = userDetails.filter((res) =>
                  res.name.includes(e.target.value),
                );
                setMutableUserDetails(filteredResData);
              } else {
                setMutableUserDetails(userDetails);
              }
            }}
          />
        </div>
        {/* <button
          onClick={() => {
            const filteredResData = userDetails.filter(
              (res) => res.info.avgRating > 4.5,
            );
            setMutableUserDetails(filteredResData);
          }}
        >
          Filter by rating
        </button> */}
      </div>
      <div className="flex w-full flex-wrap gap-5 items-center">
        {mutableUserDetails.map((user) => (
          <Link className="w-full sm:w-auto" to={`/details/${user.id}`} key={user.id}>
            <Card resData={user} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
