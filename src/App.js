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

/*

  function App() {
  return (
    <div className="App">
      <h1>My Cards</h1>
      <Card
        image="https://via.placeholder.com/300x200"
        title="Card 1"
        description="This is a description of card 1."
        url="https://example.com/card1"
      />
      <Card
        image="https://via.placeholder.com/300x200"
        title="Card 2"
        description="This is a description of card 2."
        url="https://example.com/card2"
      />
    </div>
  );
}

*/