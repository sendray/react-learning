import { useEffect, useState, type ChangeEvent } from "react";
import { Link } from "react-router";

import CardContainerNotes from "../Notes/CardContainer";
import { MOCK_SERVER_USERS_LIST_API } from "../utils/constants";
import type { User } from "../utils/types";
import Card from "./Card";
import Shimmer from "./Shimmer";

const CardContainer = () => {
  const [userDetails, setUserDetails] = useState<User[]>([]);
  const [mutableUserDetails, setMutableUserDetails] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(MOCK_SERVER_USERS_LIST_API);
      const responseJson = (await response.json()) as User[];

      setUserDetails(responseJson);
      setMutableUserDetails(responseJson);
    };

    void fetchData();
  }, []);

  if (userDetails.length === 0) return <Shimmer />;

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value.toLowerCase();

    if (searchText.length >= 3) {
      setMutableUserDetails(
        userDetails.filter((user) =>
          user.name.toLowerCase().includes(searchText),
        ),
      );
    } else {
      setMutableUserDetails(userDetails);
    }
  };

  return (
    <div className="w-full box-border px-4 sm:px-6 md:px-12 min-h-screen">
      <CardContainerNotes />

      <div className="filter">
        <div className="search my-5">
          <input
            className="p-4 h-10 w-full max-w-125
            border border-solid
            border-(--border) hover:border-(--border-hover)
            bg-(--elm-bg) hover:bg-(--elm-bg-hover)"
            type="text"
            placeholder="Search by name"
            onChange={handleSearch}
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