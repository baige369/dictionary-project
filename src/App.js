import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
          <p>
            “Dictionary: The universe in alphabetical order.” - Anatole France
          </p>
        </header>
        <main>
          <Dictionary defaultKeyword="rose" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a
              href="https://www.linkedin.com/in/ewelinabaig/"
              target="_blank"
              rel="noreferrer"
            >
              Ewelina Baig
            </a>{" "}
            and is
            <a
              href="https://github.com/baige369/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              open-sourced on GitHub
            </a>{" "}
            and
            <a
              href="https://gracious-mclean-1f308e.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
