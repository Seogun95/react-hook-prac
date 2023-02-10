import React from 'react';
import styled from 'styled-components';

const MyBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  color: white;
  border-radius: 1rem;
  background-color: tomato;
`;

const Box1 = ({ initCount }) => {
  console.log('Box1 컴포넌트가 렌더링 되었다.');
  return (
    <>
      <MyBox>
        <button onClick={() => initCount()}>초기화</button>Box1
      </MyBox>
    </>
  );
};

export default React.memo(Box1);
