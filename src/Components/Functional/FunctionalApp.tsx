import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { initialFishes } from "../../constants/data";

export function FunctionalApp() {
  const [correctAnswers, setCorrect] = useState(0);
  const [incorrectAnswers, setIncorrect] = useState(0);
  const fishIndex = correctAnswers + incorrectAnswers;
  const isDone = fishIndex === initialFishes.length;
  const curFish = initialFishes[fishIndex];
  const [fishLeft, setFishLeft] = useState(
    new Set(initialFishes.map((fish) => fish.name))
  );

  const makeGuess = (isCorrect: boolean, guess: string) => {
    if (isCorrect) {
      setCorrect(correctAnswers + 1);
      fishLeft.delete(guess);
      setFishLeft(fishLeft);
    } else {
      setIncorrect(incorrectAnswers + 1);
    }
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
        />
      )}
    </>
  );
}
