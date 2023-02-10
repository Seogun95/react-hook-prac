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
  background-color: blueviolet;
`;

const Box3 = ({ initCount }) => {
  console.log('Box3 컴포넌트가 렌더링 되었다.');
  return (
    <>
      <MyBox>
        <button onClick={initCount}>초기화</button>Box3
      </MyBox>
    </>
  );
};

export default React.memo(Box3);
