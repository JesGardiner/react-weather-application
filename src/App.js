import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was coded by{" "}
        <a
          href="https://github.com/JesGardiner"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Jessica Gardiner
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/JesGardiner/react-weather-application"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-soured on GitHub
        </a>{" "}
        & hosted on Netlify.
      </footer>
    </div>
  );
}