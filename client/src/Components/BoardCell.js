import React from "react";

function BoardCell({ index }) {
  console.log(index, "this is the index");
  return (
    <td
      className="board-col"
      //   onMouseOver={() => {

      //   }}
    >
      <div className="index-number">{index}</div>
    </td>
  );
}

export default BoardCell;