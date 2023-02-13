import React, { useState } from "react";
import BoardCell from "./BoardCell";

export default function GameBoard() {
  const [visible, setVisible] = useState(false);
  const [board, setBoard] = useState([
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [1, 0, 0, 0],
  ]);
  let index = 0;

  return (
    <>
      <div>
        <button onClick={() => setVisible(!visible)}>Toggle</button>
      </div>
      {visible && (
        <div className="board-container">
          <table className="game-board">
            <tbody>
              {board.map((row, rowIndex) => (
                <tr key={rowIndex} className="board-row">
                  {row.map(
                    (square, colIndex) => (
                      index++,
                      (
                        <BoardCell
                          key={colIndex}
                          value={square}
                          index={index}
                        />
                      )
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
