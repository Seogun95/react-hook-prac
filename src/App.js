// src/App.js
import { React, useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  useEffect(() => {
    // 화면에 컴포넌트가 나타났을(mount) 때 실행하고자 하는 함수
    console.log(`hello useEffect! : ${value} `);
    return () => {
      // 화면에서 컴포넌트가 사라졌을(unmount) 때 실행하고자 하는 함수
      console.log('사라진다!');
    };
  }, [value]);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
export default App;
