import React from 'react';
import styled from 'styled-components';

const MyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  color: white;
  border-radius: 1rem;
  background-color: blueviolet;
`;

const Box3 = () => {
  console.log('Box3 컴포넌트가 렌더링 되었다.');
  return <MyBox>Box3</MyBox>;
};

export default React.memo(Box3);
