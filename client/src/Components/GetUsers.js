import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/query";

export default function GetUsers() {
  const { data, loading, error } = useQuery(LOAD_USERS);
  useEffect(() => {}, [data]);
  return <div>getUsers</div>;
}
