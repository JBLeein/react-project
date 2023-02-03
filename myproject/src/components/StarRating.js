import React from "react";
import Star from "./Star";
import { createArray } from "./lib"; // 배열로 만들어 map을 사용함

export default function StarRating({totalStars=5, selectedStars=0}){
  return (
    <>
      {createArray(totalStars).map((n, i)=>{
       return <Star key={i} selected={selectedStars > i} />     
      })}
    </>
  );
}