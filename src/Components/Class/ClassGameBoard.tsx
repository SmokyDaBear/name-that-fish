import { Component } from "react";
import "./styles/game-board.css";
import { TFish } from "../../types";

type TClassGameBoardProps = {
  updateCount: (val: boolean, val2: string) => void;
  currentFish: TFish;
};

export class ClassGameBoard extends Component<TClassGameBoardProps> {
  state = {
    fishGuess: "",
  };

  render() {
    const { updateCount, currentFish } = this.props;

    const submitFunc = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const isCorrect = currentFish.name === this.state.fishGuess;
      updateCount(isCorrect, this.state.fishGuess);
      this.setState({ fishGuess: "" });
    };

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={currentFish.url} alt={currentFish.name} />
        </div>
        <form id="fish-guess-form" onSubmit={submitFunc}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={this.state.fishGuess}
            onChange={(e) => this.setState({ fishGuess: e.target.value })}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
