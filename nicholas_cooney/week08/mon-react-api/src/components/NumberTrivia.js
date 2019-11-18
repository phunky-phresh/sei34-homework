import React, {Component} from 'react'
import axios from 'axios';


class NumberTrivia extends Component {
  constructor() {
    super();
    this.state = {trivia: ''}
    this.fetchDump = this.fetchDump.bind(this);
  }

  fetchDump() {

    const url = 'http://numbersapi.com/random/trivia?json';
    axios.get(url).then(data => {
      let trivia = data.data.text;
          // console.log(trivia);
      this.setState({trivia: trivia});
    });

  }

  render() {
    return(
      <div>
        <h1>Random Number trivia</h1>
        <RandomTrivia onClick={ this.fetchDump }/>
        <p>{this.state.trivia}</p>
      </div>
    )
  }
};

class RandomTrivia extends Component {
  constructor() {
    super();
    this.state = {
      trivia: ''
    };
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(event) {
    this.props.onClick(this.state.qoute);
  }
  render() {
    return(
      <button onClick={this._handleSubmit}>Random</button>
    );
  }
};


export default NumberTrivia;
