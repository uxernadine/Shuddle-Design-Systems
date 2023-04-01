import './App.css';
import Button from './lib/components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <img src="shuddleLogoDark.png" className="App-logo" alt="shuddle logo" />
        <p>
          Shuddle Design System Pilot
        </p>

        {/* <p> 
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </p> */}
        
        <Button label="Learn More"/>
      </header>
    </div>
  );
}

export default App;
