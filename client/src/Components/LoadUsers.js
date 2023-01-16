import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

function GetUsers() {
  const [users, setUsers] = useState([]);
  const limit = 1001;
  const { error, loading, data } = useQuery(LOAD_USERS, {
    variables: { limit },
  });

  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data]);
  return (
    <div>
      {/* {users.map((user) => {
        return <h1 className="user-container">{user.firstName}</h1>;
      })} */}
    </div>
  );
}

export default GetUsers;
