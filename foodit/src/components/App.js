import React from "react";
import items from "../mock.json";
import FoodList from "./FoodList";

function App() {
  return (
    <div className="App">
     <FoodList items={items} />
    </div>
  );
}

export default App;
