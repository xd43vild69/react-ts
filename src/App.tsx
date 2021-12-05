import React, {FC} from 'react';
import './App.css';
import {Manager} from './Components/Todo/Manager'

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React with TS</h1>
        <Manager></Manager>
      </header>
    </div>
  );
}

export default App;
