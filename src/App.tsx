import "./App.css";
import { GildedRoseProvider } from "./context";
import { LandingPage } from "./pages";
import { ItemsPage } from "./pages/ItemsPage";

function App() {
  return (
    <div className="App">
      <GildedRoseProvider>
        <LandingPage />
        <ItemsPage />
      </GildedRoseProvider>
    </div>
  );
}

export default App;
