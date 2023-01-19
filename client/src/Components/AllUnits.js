import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_UNITS } from "../GraphQL/Queries";
import ArmyContainer from "./ArmyContainer";

function AllUnits() {
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
  if (error) {
    return alert(error);
  }
  if (loading) {
    return <h3>"Loading"</h3>;
  }

  return (
    <div>
      <div className="unit-grid-container">
        {units.map((unit) => {
          return (
            <div
              key={unit.id}
              className="unit-container"
              data-testid="unit-container"
            >
              <div className="name-header">Name:</div>
              <p>{unit.unitName}</p>
              <div className="name-header">Move Speed:</div>
              <p>{unit.moveSpeed}</p>
              <div className="name-header">Shoot Value:</div>
              <p>{unit.shootValue}</p>
              <div className="name-header">Fight Value:</div>
              <p>{unit.fightValue}</p>
              <div className="name-header">Health Points:</div>
              <p>{unit.healthPoints}</p>
              <div className="name-header">Leadership Value:</div>
              <p>{unit.leadershipValue}</p>
              <div className="name-header">Point Value:</div>
              <p>{unit.pointValue}</p>
              <button
                onClick={() => selectUnit(unit)}
                className="button-container"
                data-testid="button-container"
              >
                Select
              </button>
            </div>
          );
        })}
      </div>
      <div className="army-container" data-testid="army-container">
        <ArmyContainer army={army} clearArmy={clearArmy} />
        <button onClick={clearArmy}>Clear</button>
      </div>
    </div>
  );
}

export default AllUnits;
