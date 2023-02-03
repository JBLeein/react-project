import "./ReviewList.css"
import StarRating from "./StarRating";

// createdAt 날짜 변환 함수 
function formatDate(value){
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth()+1}. ${date.getDate()}`;
}

function ReviewListItem({item, onDelete}){
  const deleteClick = ()=>onDelete(item.id);

  return (
    <div className="ReivewListItem">
      <img src={item.imgUrl} alt={item.title} className="ReivewListItem-img" />
      <div>
        <h1>{item.title}</h1>
        <p><StarRating selectedStars={item.rating} /></p>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <button onClick={deleteClick}>삭제</button>
      </div>

    </div>
  );
}

export default function ReviewList({items, onDelete}){
  return(
    <ul className="ReviewList">
      {items.map((item, i)=>{
         return <li key={i}><ReviewListItem item={item} onDelete={onDelete}/></li>;
      })}
    </ul>
  );
}