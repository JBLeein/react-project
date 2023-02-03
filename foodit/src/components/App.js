import React from "react";
import items from "../mock.json";
import FoodList from "./FoodList";
import { useState } from "react";

function App() {
  const [order, setOrder] = useState('createdAt');
  const orderdList = [...items].sort((a, b)=> b[order] - a[order]);

  const handleNewClick = ()=>setOrder('createdAt');
  const handleCalorieClick = ()=>setOrder('calorie');

  return (
    <div className="App">
      <button onClick={handleNewClick}>최신순</button>
      <button onClick={handleCalorieClick}>칼로리순</button>
     <FoodList items={orderdList} />
    </div>
  );
}

export default App;
