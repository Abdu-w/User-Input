import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {dogName: '', dogBreed: '',age: ''};

    this.handleName = this.handleName.bind(this)
    this.handleBreed = this.handleBreed.bind(this)
    this.handleAge= this.handleAge.bind(this)
  }

  handleName= (event) =>{
    this.setState({dogName: event.target.value});
  }

  handleBreed = (event) => { 
    this.setState({dogBreed: event.target.value});
  }
  
  handleAge = (event) => {
    this.setState({age: event.target.value});
  }


  render() {
    return (
      <form>
      NAME
      <input type='text' onChange={this.handleName} />
      BREED
      <input type='text' onChange={this.handleBreed} />
      BirthDay
      <input type='date' onChange={this.handleAge} />

      </form>
    );
  }




}
