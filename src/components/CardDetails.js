import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { MOCK_SERVER_USERS_LIST_API } from "../utils/constants";

const CardDetails = () => {
  const param = useParams();

  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(`${MOCK_SERVER_USERS_LIST_API}/${param.id}`);
    const resJson = await res?.json();

    setUserDetails(resJson);
  };

  const {
    name,
    email,
    phone,
  } = userDetails;

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
