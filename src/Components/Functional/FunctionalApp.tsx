import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { fishNames, initialFishes } from "../../constants/data";

export function FunctionalApp() {
  const [correctAnswers, setCorrect] = useState(0);
  const [incorrectAnswers, setIncorrect] = useState(0);
  const fishIndex = correctAnswers + incorrectAnswers;
  const isDone = fishIndex === initialFishes.length;
  const curFish = initialFishes[fishIndex];
  const [fishLeft, setFishLeft] = useState(new Set(fishNames));

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
          <FunctionalGameBoard curFish={curFish} submitFunc={makeGuess} />
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
