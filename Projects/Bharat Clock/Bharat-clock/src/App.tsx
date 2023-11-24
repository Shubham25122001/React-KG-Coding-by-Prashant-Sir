import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BharatClock from "./Components/BaratClock";
import Timing from "./Components/Timing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <center>
      <BharatClock />
      <Timing />
    </center>
  );
}

export default App;
