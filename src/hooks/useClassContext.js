import { useState, useEffect } from 'react';

export const useClassContext = () => {
  const [classContextData, setclassContextData] = useState(null);
  const [classContextUpdateNumber, setclassContextUpdateNumber] = useState(0);

  useEffect(() => {
    console.log('classContextData loaded:', classContextData);
  }, [classContextData, classContextUpdateNumber]);

  const updateClassContext = (newContext) => {
    setclassContextData(newContext);
    setclassContextUpdateNumber(prev => prev + 1);
  };

  return {
    classContextData,
    updateClassContext,
    classContextUpdateNumber
  };
};
