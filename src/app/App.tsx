import "app/App.css";
import BackgroundAnimation from "app/lib";
import React from "react";

function App() {
  return (
    <div className="bg-animate">
      <BackgroundAnimation regular>
        <header>This Section should be covered with Bubbles</header>
      </BackgroundAnimation>
    </div>
  );
}

export default App;
