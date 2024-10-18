import { text, highlights } from '@textio/frontend-interview-data';
import logo from './assets/react.svg'
import './App.css';

console.log("Textio string:", text);
console.log("Textio highlights:", highlights);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </main>
    </div >
  );
}

export default App;
