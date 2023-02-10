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
  background-color: gray;
`;

const Box2 = () => {
  console.log('Box2 컴포넌트가 렌더링 되었다.');
  return <MyBox>Box2</MyBox>;
};

export default React.memo(Box2);
