import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_UNIT_MUTATION } from "../GraphQL/mutations";

export default function Form() {
  const [unitName, setUnitName] = useState("");
  const [moveSpeed, setMoveSpeed] = useState(0);
  const [shootValue, setShootValue] = useState(0);
  const [fightValue, setFightValue] = useState(0);
  const [healthPoints, setHealthPoints] = useState(0);
  const [leadershipValue, setLeadershipValue] = useState(0);
  const [pointValue, setPointValue] = useState(0);

  const [createUnit, { data, loading, error }] =
    useMutation(CREATE_UNIT_MUTATION);

  if (error) {
    console.log(error);
  }

  const addUnit = (e) => {
    e.preventDefault();
    console.log(unitName, "this");
    createUnit({
      variables: {
        unitName: unitName,
        moveSpeed: moveSpeed,
        shootValue: shootValue,
        fightValue: fightValue,
        healthPoints: healthPoints,
        leadershipValue: leadershipValue,
        pointValue: pointValue,
      },
    });
  };

  return (
    <form onSubmit={addUnit}>
      <input
        type="text"
        placeholder="Unit Name"
        value={unitName}
        onChange={(e) => {
          setUnitName(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Move Speed"
        value={moveSpeed}
        onChange={(e) => {
          setMoveSpeed(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Shoot Value"
        value={shootValue}
        onChange={(e) => {
          setShootValue(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Fight Value"
        value={fightValue}
        onChange={(e) => {
          setFightValue(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Health Points"
        value={healthPoints}
        onChange={(e) => {
          setHealthPoints(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Leadership Value"
        value={leadershipValue}
        onChange={(e) => {
          setLeadershipValue(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Point Value"
        value={pointValue}
        onChange={(e) => {
          setPointValue(e.target.value);
        }}
      />
      <button type="submit">Create Unit</button>
    </form>
  );
}
