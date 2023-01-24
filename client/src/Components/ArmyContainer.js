import React from "react";

export default function ArmyContainer({ army }) {
  const totalPoints = army.reduce((total, unit) => {
    if (unit.pointValue) {
      return total + unit.pointValue;
    }
    return total;
  }, 0);

  const checker = (totalPoints) => {
    if (totalPoints > 100) {
      console.log("Too many points");
    }
  };

  return (
    <div data-testid="army-container">
      {army.map((unit) => {
        checker(totalPoints);
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
