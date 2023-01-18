import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_UNITS } from "../GraphQL/Queries";

function AllUnits() {
  const [units, setUnits] = useState([]);

  const { error, loading, data } = useQuery(LOAD_UNITS);

  console.log(units);

  useEffect(() => {
    if (data) {
      setUnits(data.getAllUnits);
    }
  }, [data]);
  if (error) {
    return alert(error);
  }
  if (loading) {
    return <h3>"Loading"</h3>;
  }

  return (
    <div>
      {units.map((unit) => {
        return (
          <div key={unit.id} className="unit-container">
            <div>Name: {unit.unitName}</div>
            <div>Move Speed: {unit.moveSpeed}</div>
            <div>Shoot Value: {unit.shootValue}</div>
            <div>Fight Value: {unit.fightValue}</div>
            <div>Health Points: {unit.healthPoints}</div>
            <div>Leadership Value: {unit.leadershipValue}</div>
            <div>Point Value: {unit.pointValue}</div>
          </div>
        );
      })}
    </div>
  );
}

export default AllUnits;
