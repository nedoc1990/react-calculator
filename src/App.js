import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import * as math from "mathjs";

class App extends Component {
  state = {
    input: ""
  };

  handleClear = () => {
    this.setState({
      input: ""
    });
  };

  addToInput = val => {
    console.log(val);
    this.setState({
      input: this.state.input + val
    });
  };

  calculate = () => {
    const result = String(math.eval(this.state.input));

    if (typeof result !== "undefined") {
      this.setState({
        input: result
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
              <Button handleClick={this.handleClear}>AC</Button>
              <Button handleClick={this.addToInput}>+/-</Button>
              <Button handleClick={this.addToInput}>%</Button>
              <Button handleClick={this.addToInput}>/</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addToInput}>7</Button>
              <Button handleClick={this.addToInput}>8</Button>
              <Button handleClick={this.addToInput}>9</Button>
              <Button handleClick={this.addToInput}>*</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addToInput}>4</Button>
              <Button handleClick={this.addToInput}>5</Button>
              <Button handleClick={this.addToInput}>6</Button>
              <Button handleClick={this.addToInput}>-</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addToInput}>1</Button>
              <Button handleClick={this.addToInput}>2</Button>
              <Button handleClick={this.addToInput}>3</Button>
              <Button handleClick={this.addToInput}>+</Button>
            </div>
            <div className="row big-button">
              <Button handleClick={this.addToInput}>0</Button>
              <Button handleClick={this.addToInput}>.</Button>
              <Button handleClick={this.calculate}>=</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
