import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content">{/* Main content goes here */}</div>
      </div>
    </div>
  );
}

export default App;
