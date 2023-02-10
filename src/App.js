import React, { useState } from 'react';
import styled from 'styled-components';
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import Box3 from './components/Box3';

const FlexDiv = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem;
`;

const App = () => {
  console.log('App 컴포넌트가 렌더링 되었다.');
  const [count, setCount] = useState(0);
  const countUpBtnHandler = () => {
    setCount(count + 1);
  };

  const countDownBtnHandler = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>서근 카운트</h1>
      <p>현재 카운트: {count}</p>
      <button onClick={countUpBtnHandler}>+</button>
      <button onClick={countDownBtnHandler}>-</button>
      <FlexDiv>
        <Box1 />
        <Box2 />
        <Box3 />
      </FlexDiv>
    </>
  );
};

export default App;
