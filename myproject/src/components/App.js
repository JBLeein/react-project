import ReviewList from "./ReviewList";
// import mockItems from "../mock.json"; // JSON 파일 가져오기 
import { getReviews } from "../api";
import {useState} from "react";

function App() {
  const [items, setItems] = useState([]);
  const handleSearchClick = async () => {
    const { reviews } = await getReviews();
    setItems(reviews);
  }


  // 정렬 기준 결정을 위한 state
  const [order, setOrder] = useState('createdAt');
  const handleNewClick = () => setOrder('createdAt');
  const handleBestClick = () => setOrder('rating');

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  }

  // 정렬 기능 위해 props를 추가
  const sortedItems = [...items].sort((a, b)=> b[order] - a[order]);
  return (
    <div className="App">
      <button onClick={handleNewClick}>최신순</button>
      <button onClick={handleBestClick}>베스트순</button>
      <ReviewList items={sortedItems} onDelete={handleDelete}/>
      <button onClick={handleSearchClick}>조회</button>
    </div>
  );
}

export default App;
