import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";

interface BoxProps {
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
}

const Box = styled.main.attrs({
  className:
    "text-9xl flex-grow border-black bg-gray-500 w-48 h-48 text-center py-8",
})<BoxProps>`
  ${(props) =>
    props.top &&
    css`
      ${tw`border-t-8`}
    `}
  ${(props) =>
    props.right &&
    css`
      ${tw`border-r-8`}
    `}
  ${(props) =>
    props.bottom &&
    css`
      ${tw`border-b-8`}
    `}
  ${(props) =>
    props.left &&
    css`
      ${tw`border-l-8`}
    `}
`;

const Button = styled.button`${tw` mx-5 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border border-blue-700 rounded`}`;

function App() {
  const [actualCount, setActualCount] = useState(0);
  const player1 = 1;
  const player2 = 0;
  const [winner, setWinner] = useState(-1);
  const [tictactoe, setTictactoe] = useState([
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ]);

  const handleClick = (row: number, column: number) => {
    if (actualCount > 9) return;
    if (tictactoe[row][column] !== -1) return;
    if (winner !== -1) return;
    let copyOftictactoe = tictactoe;

    if (actualCount % 2 === 0) {
      copyOftictactoe[row][column] = 1;
      setTictactoe(copyOftictactoe);
    } else {
      copyOftictactoe[row][column] = 0;
      setTictactoe(copyOftictactoe);
    }
    setActualCount(actualCount + 1);
    console.log("copyOftictactoe: ", copyOftictactoe);
    console.log("tictactoe: ", tictactoe);
  };

  useEffect(() => {
    function checkForWinner() {
      console.log("checking For Winner...");
      let winner = -1;
  
      if (actualCount < 5) console.log("Not enough entries");
      //row 1
      else if (
        tictactoe[0][0] === player1 &&
        tictactoe[0][1] === player1 &&
        tictactoe[0][2] === player1
      )
        setWinner(player1);
      //row 2
      else if (
        tictactoe[1][0] === player1 &&
        tictactoe[1][1] === player1 &&
        tictactoe[1][2] === player1
      )
        setWinner(player1);
      //row 3
      else if (
        tictactoe[2][0] === player1 &&
        tictactoe[2][1] === player1 &&
        tictactoe[2][2] === player1
      )
        setWinner(player1);
      //column 1
      else if (
        tictactoe[0][0] === player1 &&
        tictactoe[1][0] === player1 &&
        tictactoe[2][0] === player1
      )
        setWinner(player1);
      //column 2
      else if (
        tictactoe[0][1] === player1 &&
        tictactoe[1][1] === player1 &&
        tictactoe[2][1] === player1
      )
        setWinner(player1);
      //column 3
      else if (
        tictactoe[0][2] === player1 &&
        tictactoe[1][2] === player1 &&
        tictactoe[2][2] === player1
      )
        setWinner(player1);
      //backword slash (\)
      else if (
        tictactoe[0][0] === player1 &&
        tictactoe[1][1] === player1 &&
        tictactoe[2][2] === player1
      )
        setWinner(player1);
      //forward slash (/)
      else if (
        tictactoe[0][2] === player1 &&
        tictactoe[1][1] === player1 &&
        tictactoe[2][0] === player1
      )
        setWinner(player1);
      //row 1
      else if (
        tictactoe[0][0] === player2 &&
        tictactoe[0][1] === player2 &&
        tictactoe[0][2] === player2
      )
        setWinner(player2);
      //row 2
      else if (
        tictactoe[1][0] === player2 &&
        tictactoe[1][1] === player2 &&
        tictactoe[1][2] === player2
      )
        setWinner(player2);
      //row 3
      else if (
        tictactoe[2][0] === player2 &&
        tictactoe[2][1] === player2 &&
        tictactoe[2][2] === player2
      )
        setWinner(player2);
      //column 1
      else if (
        tictactoe[0][0] === player2 &&
        tictactoe[1][0] === player2 &&
        tictactoe[2][0] === player2
      )
        setWinner(player2);
      //column 2
      else if (
        tictactoe[0][1] === player2 &&
        tictactoe[1][1] === player2 &&
        tictactoe[2][1] === player2
      )
        setWinner(player2);
      //column 3
      else if (
        tictactoe[0][2] === player2 &&
        tictactoe[1][2] === player2 &&
        tictactoe[2][2] === player2
      )
        setWinner(player2);
      //backword slash (\)
      else if (
        tictactoe[0][0] === player2 &&
        tictactoe[1][1] === player2 &&
        tictactoe[2][2] === player2
      )
        setWinner(player2);
      //forward slash (/)
      else if (
        tictactoe[0][2] === player2 &&
        tictactoe[1][1] === player2 &&
        tictactoe[2][0] === player2
      )
        setWinner(player2);
      //tie
      else if (actualCount === 9) setWinner(2);
      else if (winner === -1) return;
      else setWinner(winner);
    }
    if (actualCount > 4) checkForWinner();
  }, [actualCount, tictactoe]);

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="inline-flex flex-col border-8 border-black">
        <div className="flex justify-center w-full">
          <button onClick={() => handleClick(0, 0)}>
            <Box right bottom>
              {tictactoe[0][0] === 1 ? "❌" : tictactoe[0][0] === 0 ? "⭕" : ""}
            </Box>
          </button>
          <button onClick={() => handleClick(0, 1)}>
            <Box right bottom left>
              {tictactoe[0][1] === 1 ? "❌" : tictactoe[0][1] === 0 ? "⭕" : ""}
            </Box>
          </button>
          <button onClick={() => handleClick(0, 2)}>
            <Box bottom left>
              {tictactoe[0][2] === 1 ? "❌" : tictactoe[0][2] === 0 ? "⭕" : ""}
            </Box>
          </button>
        </div>
        <div className="flex justify-center w-full">
          <button onClick={() => handleClick(1, 0)}>
            <Box top right bottom>
              {tictactoe[1][0] === 1 ? "❌" : tictactoe[1][0] === 0 ? "⭕" : ""}
            </Box>
          </button>
          <button onClick={() => handleClick(1, 1)}>
            <Box top right bottom left>
              {tictactoe[1][1] === 1 ? "❌" : tictactoe[1][1] === 0 ? "⭕" : ""}
            </Box>
          </button>
          <button onClick={() => handleClick(1, 2)}>
            <Box top bottom left>
              {tictactoe[1][2] === 1 ? "❌" : tictactoe[1][2] === 0 ? "⭕" : ""}
            </Box>
          </button>
        </div>
        <div className="flex justify-center w-full">
          <button onClick={() => handleClick(2, 0)}>
            <Box top right>
              {tictactoe[2][0] === 1 ? "❌" : tictactoe[2][0] === 0 ? "⭕" : ""}
            </Box>
          </button>
          <button onClick={() => handleClick(2, 1)}>
            <Box top right left>
              {tictactoe[2][1] === 1 ? "❌" : tictactoe[2][1] === 0 ? "⭕" : ""}
            </Box>
          </button>
          <button onClick={() => handleClick(2, 2)}>
            <Box top left>
              {tictactoe[2][2] === 1 ? "❌" : tictactoe[2][2] === 0 ? "⭕" : ""}
            </Box>
          </button>
        </div>
      </div>
      <div className="flex justify-between w-2/6 my-2   ">
      <div className="text-lg border border-green-500 font-semibold m-1 px-10">
        {winner === -1
          ? "Game is on!!"
          : winner === 2
          ? "It's a tie"
          : "Winner is Player " + (winner === 1 ? "1" : "2")}
      </div>
      <Button onClick={() => {
        setTictactoe([
          [-1, -1, -1],
          [-1, -1, -1],
          [-1, -1, -1],
          ]);
        setActualCount(0);
        setWinner(-1);
      }}>
        Reset
      </Button>
      </div>
    </div>
  );
}

export default App;
