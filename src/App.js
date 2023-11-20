import { useEffect, useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [renderCount, setRenderCount] = useState(1);

  // 컴포넌트 렌더링 횟수 구하기 : 아래 코들는 렌더링 무한 반복
  // useEffect(() => {
  //   console.log("렌더링");
  //   setRenderCount(renderCount + 1);
  //   // refCount++;
  // });
  const refRenderCount = useRef(1);
  useEffect(() => {
    // 변화를 감지하고 렌더링을 해서는 안되는 경우에 사용
    console.log(`렌더링 수: ${refRenderCount.current++}`);
  });

  return (
    <div className="App">
      <p>Count:{count}</p>
      <button onClick={() => setCount(count + 1)}>올려</button>
    </div>
  );
}

export default App;
