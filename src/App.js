import React, { Component } from 'react';
import logo from './logo.svg';
import GovernmentFixer from './GovernmentFixer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { size: 'municipal' };
  }
  chooseLevel = (event) => {
    this.setState({ size: event.target.value });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <label>
            <input type="radio" name="size" checked={this.state.size == 'municipal'} value="municipal" onChange={this.chooseLevel} />
            Municipal
          </label>
          <label>
            <input type="radio" name="size" checked={this.state.size == 'federal'} value="federal" onChange={this.chooseLevel} />
            Federal
          </label>
          <GovernmentFixer size={this.state.size} />
        </header>
      </div>
    );
  }
}

export default App;
