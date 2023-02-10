import React from 'react';
import Child from './Child';

const Father = ({ houseName, pocketMoney }) => {
  console.log('Father:', houseName, pocketMoney); // 스파르타 10000
  return <Child houseName={houseName} pocketMoney={pocketMoney} />;
};

export default Father;
