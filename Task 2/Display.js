import React from "react";

export default class Display extends React.Component {

  render() {
    return (
      <p>
        This is Displaying From Display.js Module.<br></br> <br></br>
      {"Hi, Hello Welcome , I Am " + (this.props.BName) + " From " + (this.props.BCity)}
      </p>
    );
  }
}

