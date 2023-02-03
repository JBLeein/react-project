import ReviewList from "./ReviewList";
import items from "../mock.json"; // JSON 파일 가져오기 

function App() {
  return (
    <div className="App">
      <ReviewList items={items}/>
    </div>
  );
}

export default App;
