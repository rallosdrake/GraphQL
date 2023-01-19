import React from "react";

export default function ArmyContainer({ army }) {
  const totalPoints = army.reduce((total, unit) => {
    if (unit.pointValue) {
      return total + unit.pointValue;
    }
    return total;
  }, 0);

  return (
    <div>
      {army.map((unit) => {
        return (
          <div key={unit.id}>
            <p>{unit.unitName}</p>
          </div>
        );
      })}
      <p>{totalPoints}</p>
    </div>
  );
}
