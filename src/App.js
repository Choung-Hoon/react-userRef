import { useRef, useState } from "react";

function App() {
  const [renderer, setRenderer] = useState(0);

  const countRef = useRef(0);
  // countVar resets with each rendering.
  let countVar = 0;

  console.log("🎨렌더링");

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log(`ref : ${countRef.current}`);
  };
  const increaseVar = () => {
    countVar = countVar + 1;
    console.log(`countVar : ${countVar}`);
  };

  const doRendering = () => {
    setRenderer(renderer + 1);
  };

  const printResults = () => {
    console.log(`ref : ${countRef.current}, var:${countVar}`);
  };

  return (
    <div className="App">
      <p>Ref :{countRef.current}</p>
      <p>Var :{countVar} </p>
      <button onClick={doRendering}>렌더!</button>
      <button onClick={increaseRef}>Ref 올려</button>
      <button onClick={increaseVar}>Var 올려</button>
      <button onClick={printResults}>Ref Var 값 출력</button>
    </div>
  );
}

export default App;
