import { React, useEffect, useRef, useState } from 'react';

function App() {
  const idRef = useRef('');
  const pwRef = useRef('');

  const [id, setId] = useState('');

  const changeIdInputHandler = (event) => {
    setId(event.target.value);
  };

  // 렌더링이 될 때 id input에 자동 focusing
  useEffect(() => {
    idRef.current.focus();
  }, []);

  // useEffect 안에 조건!
  // id input에 길이가 10개가 넘어가면 자동으로 pw input으로 focusing
  useEffect(() => {
    if (id.length >= 10) {
      pwRef.current.focus();
    }
  }, [id]);

  return (
    <>
      <div>
        <lable>아이디 : </lable>
        <input
          type="text"
          ref={idRef}
          value={id}
          onChange={changeIdInputHandler}
        />
      </div>
      <div>
        <lable>비밀번호 : </lable>
        <input type="password" ref={pwRef} />
      </div>
    </>
  );
}

export default App;
