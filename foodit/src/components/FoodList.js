import React from "react";
import "./foodList.css"

function formatDate(value){
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth()+1}. ${date.getDay()}`;
}

function FoodListItem({item, onDelete}){
  const handleDelete = () => onDelete(item.id);
  
  return (
    <div className="FoodListItem">
      <img src={item.imgUrl} alt={item.title} className="FoodListItem-img" />
      <h3>{item.title}</h3>
      <p>{item.calorie}</p>
      <p>{item.content}</p>
      <p>{formatDate(item.createdAt)}</p>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
}

export default function FoodList({items, onDelete}){ // items :  배열 
  return (
    <ul className="FoodList">
      {items.map((item)=>{
        return <li key={item.id}><FoodListItem item={item} onDelete={onDelete} /></li>
      })}
    </ul>
  );
}