import React from "react";

export default function TodoList({list}){
  return (
    <ul>
     {list.map((item, i)=><li key={i}>{item}</li>)}
    </ul>
  );
}