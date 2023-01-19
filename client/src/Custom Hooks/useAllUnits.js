import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_UNITS } from "../GraphQL/Queries";

function useAllUnits() {
  const [units, setUnits] = useState([]);
  const [army, setArmy] = useState([]);
  const { error, loading, data } = useQuery(LOAD_UNITS);

  const selectUnit = (unit) => {
    setArmy([...army, unit]);
  };
  const clearArmy = () => {
    setArmy([]);
  };

  useEffect(() => {
    if (data) {
      setUnits(data.getAllUnits);
    }
  }, [data]);

  return { units, army, error, loading, selectUnit, clearArmy };
}

export default useAllUnits;
