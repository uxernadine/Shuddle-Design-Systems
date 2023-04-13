import './App.css';
import Card from './lib/components/Card'
import Button from './lib/components/Button';

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
        <Button label="read more" />
      </header>
    </div>
  );
}

export default App;