import React from 'react';
import Father from './Father';
import { FamilyContext } from '../context/FamilyContext';

const GrandFather = () => {
  const houseName = '스파르타';
  const pocketMoney = 10000;
  return (
    <FamilyContext.Provider value={{ houseName, pocketMoney }}>
      <Father />
    </FamilyContext.Provider>
  );
};

export default GrandFather;
