import './App.css';
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
          image="https://a0.muscache.com/im/pictures/miso/Hosting-28254684/original/99bd44d1-abca-4b1c-b5da-eb05eaac9193.jpeg?im_w=720"
          title="Shuddle Stay"
          description="Explore the galaxy in a new way with Shuddle"
        />
      </header>
    </div>
  );
}

export default App;