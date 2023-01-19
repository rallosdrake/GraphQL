import React from "react";

export default function ArmyContainer({ army }) {
  console.log(army);
  return (
    <div>
      {army.map((unit) => {
        return (
          <div key={unit.id}>
            <p>{unit.unitName}</p>
          </div>
        );
      })}
    </div>
  );
}
