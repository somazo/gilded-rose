import "./App.css";
import { UpdateButton } from "./components";
import { GildedRoseProvider } from "./context";
import { LandingPage } from "./pages";
import { ItemsPage } from "./pages/ItemsPage";

function App() {
  return (
    <div className="App">
      <GildedRoseProvider>
        <UpdateButton />
        <LandingPage />
        <ItemsPage />
      </GildedRoseProvider>
    </div>
  );
}

export default App;
