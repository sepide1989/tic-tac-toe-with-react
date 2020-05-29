import React, { Component } from "react";
import Square from "./Square";
import { Grid } from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";
export default class Board extends Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <Container>
        <Grid item xs={12}>
          <Paper style={{ textAlign: "center" }} className="t">
            <ButtonBase>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#ffa80f",
                  height: "50px",
                  marginTop: "10px",
                  marginRight: "3px",
                }}
              >
                {this.renderSquare(0)}
              </Button>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#ffa80f",
                  height: "50px",
                  marginTop: "10px",
                  marginRight: "3px",
                }}
              >
                {this.renderSquare(1)}
              </Button>

              <Button
                variant="contained"
                style={{
                  backgroundColor: "#ffa80f",
                  height: "50px",
                  marginTop: "10px",
                  marginRight: "3px",
                }}
              >
                {this.renderSquare(2)}
              </Button>
            </ButtonBase>
            <br></br>
            <ButtonBase>
              <Button
                variant="contained"
                style={{
                  height: "50px",
                  marginRight: "3px",
                  backgroundColor: "#ffa80f",
                }}
              >
                {this.renderSquare(3)}
              </Button>
              <Button
                variant="contained"
                style={{
                  height: "50px",
                  marginRight: "3px",
                  backgroundColor: "#ffa80f",
                  marginTop: "3px",
                  marginBottom: "3px",
                }}
              >
                {this.renderSquare(4)}
              </Button>

              <Button
                variant="contained"
                color="#ffa80f"
                style={{
                  height: "50px",
                  marginRight: "3px",
                  backgroundColor: "#ffa80f",
                  marginTop: "3px",
                  marginBottom: "3px",
                }}
              >
                {this.renderSquare(5)}
              </Button>
            </ButtonBase>
            <br></br>
            <ButtonBase>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#ffa80f",
                  height: "50px",
                  marginBottom: "10px",
                  marginRight: "3px",
                }}
              >
                {this.renderSquare(6)}
              </Button>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#ffa80f",
                  height: "50px",
                  marginBottom: "10px",
                  marginRight: "3px",
                }}
              >
                {this.renderSquare(7)}
              </Button>

              <Button
                variant="contained"
                style={{
                  backgroundColor: "#ffa80f",
                  height: "50px",
                  marginBottom: "10px",
                  marginRight: "3px",
                }}
              >
                {this.renderSquare(8)}
              </Button>
            </ButtonBase>
          </Paper>
        </Grid>
      </Container>
    );
  }
}
