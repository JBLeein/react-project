import mockitems from "./pokemons.json";
import {useState} from "react";

function Pockemon({ item , onDelete}){
  const handleDeleteClick = () => onDelete(item.id);
  return(
    <div>
      NO.{item.id} {item.name}
      <button onClick={handleDeleteClick}>삭제</button>
    </div>
  )
}

export default function App_pockemon(){
  const [items, setItems] = useState(mockitems);
  const [direction, setDirection] = useState(1);
  const handleAscClick = () => setDirection(1);
  const handleDescClick = () => setDirection(-1);
  const sortedItems = [...items].sort((a,b)=> direction * (a.id - b.id));
  const HandleDeleteItem = (id) => {
    const nextItems = items.filter((item) => id !== item.id);
    setItems(nextItems);
  }

  return (
    <>
      <button onClick={handleAscClick}>오름차순</button>    
      <button onClick={handleDescClick}>내림차순</button>    
      <ul>
        {sortedItems.map((item, i)=>{
          return <li key={i}><Pockemon item={item} onDelete={HandleDeleteItem} /></li>
        })}
      </ul>
    </>
  );
}

// function App_pockemon_renderItem(){
//   const renderedItems = items.map((item, i)=>{
//     <li key={i}><Pockemon item={item} /></li>
//   });

//   return (
//     <ul>
//      {renderedItems}
//     </ul>
//   );
// }