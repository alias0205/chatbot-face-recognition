import React from "react";
import Chatbot from "./components/Chatbot";
import FaceRecognition from "./components/FaceRecognition";

const App = () => {
  return (
    <div className="app">
      <header className="app__header">
        <div>
          <h1>Chatbot & Face Recognition</h1>
          <p>Single MERN interface for conversational support and face analysis.</p>
        </div>
        <div className="app__status">
          <span className="status-dot" />
          <span>API ready</span>
        </div>
      </header>
      <main className="app__grid">
        <Chatbot />
        <FaceRecognition />
      </main>
    </div>
  );
};

export default App;
