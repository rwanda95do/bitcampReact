import logo from "./logo.svg";
import "./App.css";
import Color from "./components/Color";
import Count from "./components/Count";
import Animal from "./components/Animal";
import CoffeeOrder from "./components/CoffeeOrder";
import CoffeeResult from "./components/CoffeeResult";

function App() {
  return (
    <div className="App">
      <Color />
      <Count />
      <Animal />
      <CoffeeOrder />
      <CoffeeResult />
    </div>
  );
}

export default App;
