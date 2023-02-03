import { gptResponse } from "./api";

function App() {

  const res = gptResponse("반수생 거북이의 종류는?");

  return (
    <div className="App">
      {res}
    </div>
  );
}

export default App;
