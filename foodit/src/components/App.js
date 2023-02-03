import React from "react";
import mockItems from "../mock.json";
import FoodList from "./FoodList";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(mockItems);

  const [order, setOrder] = useState('createdAt');
  const orderdList = [...items].sort((a, b)=> b[order] - a[order]);
  

  const handleDelete = (id) => {
    const nextList = items.filter((item)=> item.id !== id);
    setItems(nextList);
  }

  const handleNewClick = ()=>setOrder('createdAt');
  const handleCalorieClick = ()=>setOrder('calorie');

  return (
    <div className="App">
     <button onClick={handleNewClick}>최신순</button>
     <button onClick={handleCalorieClick}>칼로리순</button>
     <FoodList items={orderdList} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
