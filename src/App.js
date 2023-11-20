import { useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log("🎨렌더링");
  const increaseCountState = () => {
    setCount(count + 1);
  };
  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log(`Ref : ${countRef.current}`);
  };

  return (
    <div className="App">
      <p>State:{count}</p>
      <p>Ref:{countRef.current}</p>
      <button onClick={increaseCountState}>State올려</button>
      <button onClick={increaseCountRef}>Ref올려</button>
    </div>
  );
}

export default App;
