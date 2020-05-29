import React, { Component } from "react";
import Board from "./Board";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);
    if (winner || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <Button
            style={{
              backgroundColor: "white",
              margin: "5px",
              borderRadius: "10px",
            }}
            onClick={() => {
              this.jumpTo(move);
            }}
          >
            {desc}
          </Button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <div>
        <Container maxWidth="lg">
          <Card style={{ backgroundColor: "green" }}>
            <div style={{ padding: "7px" }}>
              <Typography color="black" align="center" variant="h4">
                Tic Tac Toe
              </Typography>
            </div>
          </Card>
          <br></br>
        </Container>

        <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />

        <br></br>
        <br></br>
        <Container maxWidth="sm">
          <Alert variant="filled" severity="success">
            <div>{status}</div>
          </Alert>
          <br></br>

          <Alert variant="filled" severity="success">
            <Card style={{ backgroundColor: "#ffa80f" }}>
              <ol style={{ padding: "10px", margin: "20px" }}>{moves}</ol>
            </Card>
          </Alert>
        </Container>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
