import { React, useContext } from 'react';
import styled from 'styled-components';

import { FamilyContext } from '../context/FamilyContext';

const MySpan = styled.span`
  color: tomato;
  padding: 0 0.2rem;
  font-weight: bold;
`;

const Child = () => {
  const date = useContext(FamilyContext);

  return (
    <div>
      <p>
        저는 <MySpan>{date.houseName}</MySpan>의 막내입니다. <br />
        할아버지가 아버지를 통해 저에게 <MySpan>{date.pocketMoney}원</MySpan>을
        용돈으로 주셨습니다.
      </p>
    </div>
  );
};

export default Child;
