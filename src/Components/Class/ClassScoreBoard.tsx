import { Component } from "react";
import "./styles/score-board.css";

type TAnswersLeftProps = {
  incorrectCount: number;
  correctCount: number;
  guesses: Set<string>;
};
export class ClassScoreBoard extends Component<TAnswersLeftProps> {
  render() {
    const { incorrectCount, correctCount, guesses } = this.props;
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div>Correct ✅: {correctCount}</div>
        <div id="choices-left">
          Choices Left:
          {[...guesses]
            .sort(() => Math.random() - 0.5)
            .map((answer) => (
              <div key={answer} className="choice">
                {answer}
              </div>
            ))}
        </div>
      </div>
    );
  }
}
