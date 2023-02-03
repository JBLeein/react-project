import React from "react";
import TodoList from "./TodoList";
import { useState } from "react";

export default function App_todo(){
  const [list, setList] = useState([]);
  const [message, setMessage] = useState('');

  const storageMessage = (mes) => {
    setMessage(mes);
  }
  // const newList = ()=> {
  //   setList("dd");
  // }

  return (
    <>
      <input type="text" onChange={(e)=>storageMessage(e.target.value)}/>
      <button onClick={()=>setList([...list, message])}>입력</button>
      <TodoList list={list}/>
    </>
  );
}