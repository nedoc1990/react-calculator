import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import * as math from "mathjs";

class App extends Component {
  state = {
    input: "0",
    canDecimal: true,
    lastOperator: ""
  };

  handleClear = () => {
    this.setState({
      input: "0",
      canDecimal: true
    });
  };

  addToInput = val => {
    switch (val) {
      case "0":
        if (this.state.input === "0") {
          return;
        } else {
          this.setState({
            input: this.state.input + val,
            canDecimal: !isNaN(val),
            lastOperator: ""
          });
        }
        break;
      case ".":
        if (!this.state.canDecimal) {
          return;
        } else {
          this.setState({
            input: this.state.input + val,
            canDecimal: false
          });

          return;
        }
      case "+":
      case "-":
      case "*":
      case "/":
        if (this.state.lastOperator !== "") {
          const newVal = this.state.input.slice(0, this.state.input.length - 1);
          this.setState({
            input: newVal + val,
            canDecimal: false,
            lastOperator: val
          });
        } else {
          this.setState({
            input: this.state.input + val,
            canDecimal: false,
            lastOperator: val
          });
        }
        break;
      default:
        if (this.state.input === "0" || this.state.input === "Error") {
          this.setState({
            input: val
          });
        } else {
          const splitted = this.state.input.split("");
          const lastOperator = Math.max(
            splitted.lastIndexOf("+"),
            Math.max(
              splitted.lastIndexOf("-"),
              Math.max(splitted.lastIndexOf("*"), splitted.lastIndexOf("/"))
            )
          );
          this.setState({
            input: this.state.input + val,
            lastOperator: "",
            canDecimal: splitted.lastIndexOf(".") < lastOperator
          });
        }
    }
  };

  calculate = () => {
    try {
      const expression = math.eval(this.state.input);
      const result = String(expression);
      console.log(result % 1);
      if (typeof result !== "undefined") {
        this.setState({
          input: result,
          canDecimal: result === Math.floor(result) ? true : false
        });
      }
    } catch (error) {
      this.setState({
        input: "Error"
      });
    }
  };

  render() {
    return (
      <div className="app">
        <div className="wrapper">
          <div className="calc-wrapper">
            <Input input={this.state.input} />
            <div className="row advanced">
              <Button handleClick={this.handleClear} id="clear">
                AC
              </Button>
              <Button handleClick={this.addToInput} id="unary">
                +/-
              </Button>
              <Button handleClick={this.addToInput} id="mod">
                %
              </Button>
              <Button handleClick={this.addToInput} id="divide">
                /
              </Button>
            </div>
            <div className="row">
              <Button handleClick={this.addToInput} id="seven">
                7
              </Button>
              <Button handleClick={this.addToInput} id="eight">
                8
              </Button>
              <Button handleClick={this.addToInput} id="nine">
                9
              </Button>
              <Button handleClick={this.addToInput} id="multiply">
                *
              </Button>
            </div>
            <div className="row">
              <Button handleClick={this.addToInput} id="four">
                4
              </Button>
              <Button handleClick={this.addToInput} id="five">
                5
              </Button>
              <Button handleClick={this.addToInput} id="six">
                6
              </Button>
              <Button handleClick={this.addToInput} id="subtract">
                -
              </Button>
            </div>
            <div className="row">
              <Button handleClick={this.addToInput} id="one">
                1
              </Button>
              <Button handleClick={this.addToInput} id="two">
                2
              </Button>
              <Button handleClick={this.addToInput} id="three">
                3
              </Button>
              <Button handleClick={this.addToInput} id="add">
                +
              </Button>
            </div>
            <div className="row big-button">
              <Button handleClick={this.addToInput} id="zero">
                0
              </Button>
              <Button handleClick={this.addToInput} id="decimal">
                .
              </Button>
              <Button handleClick={this.calculate} id="equals">
                =
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
