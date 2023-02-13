import React from "react";

function BoardCell({ index }) {
  console.log(index, "this is the index");
  return <td className="board-col">{index}</td>;
}

export default BoardCell;
