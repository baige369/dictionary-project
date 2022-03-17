import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={logo}
            alt="SheCodes logo"
            className="App-logo img-fluid"
          ></img>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Ewelina Baig</small>
        </footer>
      </div>
    </div>
  );
}
