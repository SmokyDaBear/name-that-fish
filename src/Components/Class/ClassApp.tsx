import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "../../constants/data";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
    guesses: new Set<string>(initialFishes.map((fish) => fish.name)),
  };

  updateCount = (val: boolean, guess: string) => {
    this.setState(
      (prev: {
        incorrectCount: number;
        correctCount: number;
        guesses: Set<string>;
      }) => {
        if (val) prev.guesses.delete(guess);
        return {
          incorrectCount: val ? prev.incorrectCount : prev.incorrectCount + 1,
          correctCount: val ? prev.correctCount + 1 : prev.correctCount,
          guesses: prev.guesses,
        };
      }
    );
  };

  render() {
    const fishIndex = this.state.incorrectCount + this.state.correctCount;

    const isGameOver = fishIndex === initialFishes.length;
    return (
      <>
        {!isGameOver && (
          <>
            <ClassScoreBoard
              correctCount={this.state.correctCount}
              incorrectCount={this.state.incorrectCount}
              guesses={this.state.guesses}
            />
            <ClassGameBoard
              updateCount={this.updateCount}
              currentFish={initialFishes[fishIndex]}
            />
          </>
        )}

        {isGameOver && (
          <ClassFinalScore
            correctCount={this.state.correctCount}
            incorrectCount={this.state.incorrectCount}
          />
        )}
      </>
    );
  }
}
