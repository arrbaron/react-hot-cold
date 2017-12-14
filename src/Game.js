import React, { Component } from "react";
import Header from "./components/Header"
import GuessForm from "./components/GuessForm";
import GuessNumber from "./components/GuessNumber";
import PlayAgain from "./components/PlayAgain";
import GuessList from "./components/GuessList";

class Game extends Component {
  constructor() {
    super();

    this.state = {
      answer: Math.floor(Math.random() * 101),
      currentGuess: 0,
      guesses: [],
      gameOver: false,
      feedback: "Guess a number between 1 and 100"
    }

    this.setGuess = this.setGuess.bind(this);
    this.submitGuess = this.submitGuess.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  resetGame(gameOver) {
    this.setState({gameOver});
    this.setState({guesses: []});
    this.setState({answer: Math.floor(Math.random() * 101)})
  }

  setGuess(currentGuess) {
    this.setState({currentGuess});
  }

  submitGuess() {
    const guess = this.state.currentGuess;

    this.setState({
      guesses: [...this.state.guesses, {
        guess
      }]
    })
    this.checkGuess(guess);
  }

  checkGuess(guess) {
    const closeThreshold = 15;
    
    if (guess === this.state.answer) {
      this.setState({feedback: "Correct! You win!"});
      this.setState({gameOver: true});
    } else if (Math.abs(guess - this.state.answer) <= closeThreshold) {
      this.setState({ feedback: "Warm..." });
    } else {
      this.setState({ feedback: "Cold!" });
    }
  }

  render() {
    // refactor - make this less redundant
    
    if (!this.state.gameOver) {
      return (
        <div>
          <header role="banner">
            <Header />
          </header>
          <main role="main">
            <h2>{this.state.feedback}</h2>
            <GuessForm onChange={this.setGuess} onSubmit={this.submitGuess} />
            <GuessNumber guesses={this.state.guesses} />
            <GuessList guesses={this.state.guesses} />
          </main>
        </div>
      );
    } else {
      return (
        <div>
          <header role="banner">
            <Header />
          </header>
          <main role="main">
            <h2>{this.state.feedback}</h2>
            <PlayAgain onClick={this.resetGame} />
            <GuessNumber className="guess-number" guesses={this.state.guesses} />
            <GuessList className="guess-list" guesses={this.state.guesses} />
          </main>
        </div>
      )
    }
  }
}

export default Game;