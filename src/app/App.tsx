import React from "react";
import "app/App.css";
import BackgroundAnimation from "app/lib";

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
