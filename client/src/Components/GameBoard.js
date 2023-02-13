import React, { useState } from "react";

export default function GameBoard() {
  const [board, setBoard] = useState([
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [1, 0, 0, 0],
  ]);

  return (
    <div className="board-container">
      <table className="game-board">
        <tbody>
          {board.map((row, rowIndex) => (
            <tr key={rowIndex} className="board-row">
              {row.map((square, colIndex) => (
                <td key={colIndex} className="board-col"></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
