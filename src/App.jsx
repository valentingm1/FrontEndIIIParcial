import { useState } from "react";
import Card from "./Card";
import Form from "./Form";
import "./App.css";

function App() {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [footer, setFooter] = useState("");

  return (
    <div className="App">
      <div className="app_title">Personalizá tu propia tarjeta</div>
      <Form
        setTitulo={setTitulo}
        setContenido={setContenido}
        setFooter={setFooter}
      />
      <Card titulo={titulo} contenido={contenido} footer={footer} />
    </div>
  );
}

export default App;
