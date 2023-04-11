import './App.css';
import Button from './lib/components/Button';
import Card from './lib/components/Card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <img src="shuddleLogoDark.png" className="App-logo" alt="shuddle logo" />
        <p>
          Shuddle Design System Pilot
        </p>
        <Card
          image="https://via.placeholder.com/150x150"
          title="Shuddle Guide"
          description="Explore the galaxy in a new way with Shuddle"
        />
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