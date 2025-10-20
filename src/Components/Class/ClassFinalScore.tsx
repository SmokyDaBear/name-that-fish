import { Component } from "react";

type TClassFinalScoreProps = {
  correctCount: number;
  incorrectCount: number;
  resetGame: () => void;
};
export class ClassFinalScore extends Component<TClassFinalScoreProps> {
  render() {
    const { correctCount, incorrectCount, resetGame } = this.props;
    const totalCount = correctCount + incorrectCount;
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correctCount}</p>
          <hr />
          <p>{totalCount}</p>
          <button onClick={resetGame}>Play Again</button>
        </div>
      </div>
    );
  }
}
