import ReviewList from "./ReviewList";
import items from "../mock.json"; // JSON 파일 가져오기 
import {useState} from "react";

function App() {
  // 정렬 기준 결정을 위한 state
  const [order, setOrder] = useState('createdAt');
  const handleNewClick = () => setOrder('createdAt');
  const handleBestClick = () => setOrder('rating');

  // 정렬 기능 위해 props를 추가
  const sortedItems = [...items].sort((a, b)=> b[order] - a[order]);
  return (
    <div className="App">
      <button onClick={handleNewClick}>최신순</button>
      <button onClick={handleBestClick}>베스트순</button>
      <ReviewList items={sortedItems}/>
    </div>
  );
}

export default App;
