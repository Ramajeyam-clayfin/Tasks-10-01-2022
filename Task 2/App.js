import React from "react";
import ReactDOM from 'react-dom';

export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Name: ' '};
    this.handleChange = this.handleChange.bind(this);
    this.state = {City: ' '};
    this.handleChange1 = this.handleChange1.bind(this);	
  }
     handleChange(event) {   
      this.setState({Name: event.target.value}); 
     }
     handleChange1(event) {   
      this.setState({City: event.target.value});
      }
render() {
    return (
      <div>
        <label>
          Name : 
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          City : 
          <input type="text" value={this.state.value} onChange={this.handleChange1} />
        </label>
        <input type="submit" value="Submit" />
        <p>Name Is : {this.state.Name}</p>
        <p>City Is : {this.state.City}</p>
        
      </div>
    );
  }
}