// Code ClickityClick Component Here
import React from "react";

export default class ClickityClick extends React.Component {
  constructor() {
    super();
    this.state = {
      hasBeenClicked: false,
      currentTheme: "blue",
    };
  }

    handleClick = () => {
      this.setState(previousState => {
        return {
            hasBeenClicked: !previousState.hasBeenClicked
          }
        })
      };

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
        <button onClick={this.handleClick}>{this.state.hasBeenClicked ? "ON" : "OFF"}</button>
      </div>
    );
  }
}
