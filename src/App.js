import { useEffect, useRef } from "react";

function App() {
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const handleLogin = () => {
    alert(`환영합니다. ${inputRef.current.value} 님`);
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
}

export default App;
