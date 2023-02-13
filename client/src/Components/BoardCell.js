import React from "react";

function BoardCell({ index }) {
  return (
    <td className="board-col" data-testid="board-col">
      <div className="index-number">{index}</div>
    </td>
  );
}

export default BoardCell;
