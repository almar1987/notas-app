import React, { useState } from "react";
import CrearItem from "./componentes/CrearItem";
import InputArea from "./componentes/InputArea";

function App() {

  const [items, setItems] = useState([]);

  function añadirItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }

  function borrarItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (

    <section>
      <div className="container-fluid">
        
          <div className="titulo">
            <h1>Notas.App</h1>
          </div>
          <InputArea onAdd={añadirItem} />
          <div className="items">
            <ul>
              {items.map((crearItem, index) => (
                <CrearItem
                  key={index}
                  id={index}
                  text={crearItem}
                  onChecked={borrarItem}
                />
              ))}
            </ul>
          </div>
        </div>
    </section>
  );
}

export default App;