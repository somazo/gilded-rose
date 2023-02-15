import "./App.css";
import { Items } from "./components";
import { GildedRoseProvider } from "./context";

function App() {
  return (
    <div className="App">
      <GildedRoseProvider>
        <h1>Welcome to Gilded Rose.</h1>
        <Items />
      </GildedRoseProvider>
    </div>
  );
}

export default App;
