import React from "react";
import "./ReviewList.css"

// createdAt 날짜 변환 함수 
function formatDate(value){
  const date = new Date(value);
  return `개봉일 - ${date.getFullYear()}. ${date.getMonth()+1}. ${date.getDate()}`;
}

function ReviewListItem({item}){
  return (
    <div className="ReivewListItem">
      <img src={item.imgUrl} alt={item.title} className="ReivewListItem-img" />
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{item.content}</p>
        <p>{formatDate(item.createdAt)}</p>
      </div>
    </div>
  );
}

export default function ReviewList({items}){
  return(
    <ul>
      {items.map((item)=>{
         return <li><ReviewListItem item={item}/></li>;
      })}
    </ul>
  );
}