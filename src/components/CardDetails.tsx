import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { MOCK_SERVER_USERS_LIST_API } from "../utils/constants";
import type { User } from "../utils/types";

const CardDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [userDetails, setUserDetails] = useState<User | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const response = await fetch(`${MOCK_SERVER_USERS_LIST_API}/${id}`);
      const responseJson = (await response.json()) as User;

      setUserDetails(responseJson);
    };

    void fetchData();
  }, [id]);

  if (!userDetails) return <div className="card">Loading...</div>;

  const { name, email, phone } = userDetails;

  return (
    <div className="card">
      <h2 className="title">{name}</h2>
      <div className="subtitle">
        {email}, {phone}
      </div>
    </div>
  );
};

export default CardDetails;