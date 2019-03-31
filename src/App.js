import React, { Component } from 'react';
import logo from './logo.svg';
import GovernmentSizeChooser from './GovernmentSizeChooser';
import GovernmentFixer from './GovernmentFixer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { size: 'municipal' };
  }
  chooseSize = (size) => {
    this.setState({ size });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <GovernmentSizeChooser
            sizes={['municipal', 'state', 'federal']}
            onSelectSize={this.chooseSize}
          />
          <GovernmentFixer size={this.state.size} />
        </header>
      </div>
    );
  }
}

export default App;
