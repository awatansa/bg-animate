import React from 'react';
import './App.css';
import BackgroundAnimation from './lib';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className={"bg-animate"}>
          <BackgroundAnimation>
            <h1>Hello World!</h1>
          </BackgroundAnimation>
        </div>
      </header>
    </div>
  );
}

export default App;
