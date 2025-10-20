import "./styles/final-score.css";

type TFunctionFinalScoreProps = {
  correctCount: number;
  incorrectCount: number;
  resetGame: () => void;
};

export function FunctionalFinalScore(props: TFunctionFinalScoreProps) {
  const { correctCount, incorrectCount, resetGame } = props;
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
