import { useState } from "react";
import Card from "./Card";
import Form from "./Form";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Form/>
      <Card />
    </div>
  );
}

export default App;
