import { useState } from "react";
import "./App.css";

function App() {
  const boardBox = {
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: "",
  };
  const allBox = document.querySelectorAll("table button");

  const [board, setBoard] = useState(boardBox);
  const resetBoard = () => {
    setBoard(boardBox);
    setPlayer("X");
    allBox.forEach((eachButton) => {
      eachButton.disabled = false;
    });
  };
  const winnerTrio = [
    ["one", "two", "three"],
    ["four", "five", "six"],
    ["seven", "eight", "nine"],
    ["one", "four", "seven"],
    ["two", "five", "eight"],
    ["three", "six", "nine"],
    ["one", "five", "nine"],
    ["three", "five", "seven"],
  ];
  function checkWinner() {
    for (let trio of winnerTrio) {
      const [a, b, c] = trio;
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return false;
  }
  const [player, setPlayer] = useState("X");

  //check winner if there is a winner
  const checkWinnerPlayer = checkWinner();
  let txt = "";
  if (checkWinnerPlayer) {
    // add win message to text and disable all buttons
    allBox.forEach((eachButton) => {
      eachButton.disabled = true;
    });
    txt = `Winner is ${checkWinnerPlayer} !! Please Restart game`;
  } else {
    txt = `Current Player turn: ${player}`;
  }

  const changePlayer = (event) => {
    if (player == "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }

    event.target.disabled = true;
  };
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <p>{txt}</p>
      <p>Current Player : {player}</p>
      <div>
        <table>
          <tbody>
            <tr>
              <th>
                <button
                  onClick={(event) => {
                    changePlayer(event),
                      setBoard((prevData) => ({
                        ...prevData,
                        one: player,
                      }));
                  }}
                >
                  {board.one}
                </button>
              </th>
              <th>
                <button
                  onClick={(event) => {
                    changePlayer(event),
                      setBoard((prevData) => ({
                        ...prevData,
                        two: player,
                      }));
                  }}
                >
                  {board.two}
                </button>
              </th>
              <th>
                <button
                  onClick={(event) => {
                    changePlayer(event),
                      setBoard((prevData) => ({
                        ...prevData,
                        three: player,
                      }));
                  }}
                >
                  {board.three}
                </button>
              </th>
            </tr>
            <tr>
              <td>
                <button
                  onClick={(event) => {
                    changePlayer(event),
                      setBoard((prevData) => ({
                        ...prevData,
                        four: player,
                      }));
                  }}
                >
                  {board.four}
                </button>
              </td>
              <td>
                <button
                  onClick={(event) => {
                    changePlayer(event),
                      setBoard((prevData) => ({
                        ...prevData,
                        five: player,
                      }));
                  }}
                >
                  {board.five}
                </button>
              </td>
              <td>
                <button
                  onClick={(event) => {
                    changePlayer(event),
                      setBoard((prevData) => ({
                        ...prevData,
                        six: player,
                      }));
                  }}
                >
                  {board.six}
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  onClick={(event) => {
                    changePlayer(event),
                      setBoard((prevData) => ({
                        ...prevData,
                        seven: player,
                      }));
                  }}
                >
                  {board.seven}
                </button>
              </td>
              <td>
                <button
                  onClick={(event) => {
                    changePlayer(event),
                      setBoard((prevData) => ({
                        ...prevData,
                        eight: player,
                      }));
                  }}
                >
                  {board.eight}
                </button>
              </td>
              <td>
                <button
                  onClick={(event) => {
                    changePlayer(event),
                      setBoard((prevData) => ({
                        ...prevData,
                        nine: player,
                      }));
                  }}
                >
                  {board.nine}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <button onClick={resetBoard}>Restart Game</button>
    </>
  );
}

export default App;
