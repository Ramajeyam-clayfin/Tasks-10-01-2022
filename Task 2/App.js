import React from "react";
import Display  from "./Display";
// import ReactDOM from 'react-dom';

export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Name: ' '};
    this.NewName = this.NewName.bind(this);
    this.state = {City: ' '};
    this.NewCity = this.NewCity.bind(this);
    this.Submit = this.Submit.bind(this);
  }
  NewName(event) {   
     this.setState({Name: event.target.value}); 
     }
     NewCity(event) {   
      this.setState({City: event.target.value});
      }
      Submit(event) {
      event.preventDefault();
      }

  render() {
    return (
      <form onSubmit={this.Submit}>
        <label>
          Name : 
          <input type="text" value={this.state.value} onChange={this.NewName} />
        </label><br></br> <br></br>
        <label>
          City : 
          <input type="text" value={this.state.value} onChange={this.NewCity} />
        </label> <br></br> <br></br>
        <input type="submit" />
        <p>My Name Is : {this.state.Name}</p>
        <p>My City Is : {this.state.City}</p>
        
        <MyForm BName = {this.state.Name} BCity = {this.state.City} />
        <Display BName = {this.state.Name} BCity = {this.state.City} />
        
      </form>
    );
  }
}

class MyForm extends React.Component {

  render() {
    return (
      <form>
      <textarea value={"I Am " + (this.props.BName) + " From " + (this.props.BCity)} />
      </form>
    );
  }
}

export {MyForm}