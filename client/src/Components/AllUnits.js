import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_UNITS } from "../GraphQL/Queries";
import ArmyContainer from "./ArmyContainer";
import useAllUnits from "../Custom Hooks/useAllUnits";
function AllUnits() {
  const { units, army, error, loading, selectUnit, clearArmy } = useAllUnits();
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
      <div className="army-container">
        <ArmyContainer army={army} clearArmy={clearArmy} />
        <button onClick={clearArmy} data-testid="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
}

export default AllUnits;
