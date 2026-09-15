import { useEffect, useState } from "react";
import { Link } from "react-router";
// import Markdown from 'react-markdown'

import Card from "./Card";
import Shimmer from "./Shimmer";
import CardContainerNotes from "../Notes/CardContainer";

import { MOCK_SERVER_USERS_LIST_API } from "../utils/constants";

const CardContainer = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [mutableUserDetails, setMutableUserDetails] = useState([]);

  // const markdown = '# Hi, *Pluto*!'

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
    <div className="w-full box-border px-4 sm:px-6 md:px-12 min-h-screen">
      <CardContainerNotes />

      {/* Filter  */}
      <div className="filter">
        <div className="search my-5">
          <input
            className="p-4 h-10 w-full max-w-125
            border border-solid
            border-(--border) hover:border-(--border-hover)
            bg-(--elm-bg) hover:bg-(--elm-bg-hover)"
            type="text"
            placeholder="Search by name"
            onChange={(e) => {
              if (e.target.value?.length >= 3) {
                const filteredResData = userDetails.filter((res) =>
                  res?.name
                    ?.toLowerCase()
                    .includes(e.target.value?.toLowerCase()),
                );
                setMutableUserDetails(filteredResData);
              } else {
                setMutableUserDetails(userDetails);
              }
            }}
          />
        </div>
      </div>

      <div className="flex w-full flex-wrap gap-5 items-center">
        {mutableUserDetails.map((user) => (
          <Link
            className="w-full md:w-[calc(50%-1.25rem)] sm:w-[calc(100%-1.25rem)]"
            to={`/details/${user.id}`}
            key={user.id}
          >
            <Card resData={user} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
