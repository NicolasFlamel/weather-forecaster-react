import { createContext, useContext, useState } from 'react';

type UnitProviderProps = {
  children: React.ReactNode;
};

interface UnitContextInterface {
  isMetric: boolean;
  toggleMetric: () => void;
}

const defaultState = { isMetric: false } as UnitContextInterface;
const UnitContext = createContext(defaultState);

export const useUnit = () => useContext(UnitContext);

export const UnitProvider = ({ children }: UnitProviderProps) => {
  const [isMetric, setIsMetric] = useState(false);

  const toggleMetric = () => {
    setIsMetric((prev) => !prev);
  };

  const value = { isMetric, toggleMetric };

  return <UnitContext.Provider value={value}>{children}</UnitContext.Provider>;
};
