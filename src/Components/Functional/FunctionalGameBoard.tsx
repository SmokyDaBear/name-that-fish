import "./styles/game-board.css";
import { TFish } from "../../types";
import { useState } from "react";

type TFunctionGameBoardProps = {
  curFish: TFish;
  submitFunc: (val: boolean, val2: string) => void;
};

export function FunctionalGameBoard(props: TFunctionGameBoardProps) {
  const { curFish, submitFunc } = props;
  const [fishGuess, setFishGuess] = useState("");

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isCorrect = curFish.name === fishGuess;
    submitFunc(isCorrect, fishGuess);
    setFishGuess("");
  };
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={curFish.url} alt={curFish.name} />
      </div>
      <form id="fish-guess-form" onSubmit={(e) => onFormSubmit(e)}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={fishGuess}
          onChange={(e) => setFishGuess(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
