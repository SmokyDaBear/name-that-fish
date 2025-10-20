import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { fishNames, initialFishes } from "../../constants/data";

export function FunctionalApp() {
  //State Variables:
  const [correctAnswers, setCorrect] = useState(0);
  const [incorrectAnswers, setIncorrect] = useState(0);
  const [fishLeft, setFishLeft] = useState(new Set(fishNames));

  //Derived Variables:
  const fishIndex = correctAnswers + incorrectAnswers;
  const isDone = fishIndex === initialFishes.length;

  const makeGuess = (isCorrect: boolean, guess: string) => {
    if (isCorrect) {
      setCorrect(correctAnswers + 1);
      fishLeft.delete(guess);
      setFishLeft(fishLeft);
    } else {
      setIncorrect(incorrectAnswers + 1);
    }
  };

  const resetGame = () => {
    setCorrect(0);
    setIncorrect(0);
    setFishLeft(new Set(fishNames));
  };

  return (
    <>
      {!isDone && (
        <>
          <FunctionalScoreBoard
            fishLeft={fishLeft}
            correctCount={correctAnswers}
            incorrectCount={incorrectAnswers}
          />
          <FunctionalGameBoard
            curFish={initialFishes[fishIndex]}
            submitFunc={makeGuess}
          />
        </>
      )}

      {isDone && (
        <FunctionalFinalScore
          correctCount={correctAnswers}
          incorrectCount={incorrectAnswers}
          resetGame={resetGame}
        />
      )}
    </>
  );
}
