import "./styles/score-board.css";

type TFunctionScoreBoardProps = {
  correctCount: number;
  incorrectCount: number;
  fishLeft: Set<string>;
};

export function FunctionalScoreBoard(props: TFunctionScoreBoardProps) {
  const { correctCount, incorrectCount, fishLeft } = props;
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {[...fishLeft].map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
