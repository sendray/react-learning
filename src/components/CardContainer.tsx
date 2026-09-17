import { useEffect, useState, type ChangeEvent } from "react";
import { Link } from "react-router";
import { List, type RowComponentProps } from "react-window";

import CardContainerNotes from "../notes/CardContainer";
import { MOCK_SERVER_USERS_LIST_API } from "../utils/constants";
import type { ICardRowProps, IUser } from "../utils/types";
import Card from "./Card";
import Shimmer from "./Shimmer";

const CardRow = ({ index, style, users }: RowComponentProps<ICardRowProps>) => {
  const user = users[index];

  if (!user) return null;

  return (
    <div style={{ ...style, paddingBottom: "20px" }}>
      <Link className="block w-full" to={`/details/${user.id}`}>
        <Card resData={user} />
      </Link>
    </div>
  );
};

const CardContainer = () => {
  const [userDetails, setUserDetails] = useState<IUser[]>([]);
  const [mutableUserDetails, setMutableUserDetails] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(MOCK_SERVER_USERS_LIST_API);
      const responseJson = (await response.json()) as IUser[];

      setUserDetails(responseJson);
      setMutableUserDetails(responseJson);
    };

    fetchData();
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
    <>
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

      <div
        className="flex w-full flex-wrap gap-5 items-center"
        style={{
          height: "calc(100vh - 422px)",
        }}
      >
        <List
          defaultHeight={600}
          overscanCount={3}
          rowComponent={CardRow}
          rowCount={mutableUserDetails.length}
          rowHeight={140}
          rowProps={{ users: mutableUserDetails }}
          style={{ height: "600px", width: "100%" }}
        />
      </div>
    </>
  );
};

export default CardContainer;
