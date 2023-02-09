import { React, useState } from 'react';

function App() {
  const [num, setNum] = useState(0);
  return (
    <>
      <p>{num}</p>
      {/* 기존 업데이트 방식 */}
      <button onClick={() => setNum(num + 1)}>카운트</button>
      {/* //함수형 업데이트 방식 */}
      <button onClick={() => setNum((currentState) => currentState + 1)}>카운트</button>
    </>
  );
}
export default App;
