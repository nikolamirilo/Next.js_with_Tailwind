"use client";
import React, { createContext, useContext, useState } from "react";

const MainContext = createContext<any>({});

export const useMainContext = () => {
  return useContext(MainContext);
};

interface MainContextProps {
  children: React.ReactNode;
}

const MainContextProvider: React.FC<MainContextProps> = ({ children }) => {
  const [loadActions, setLoadActions] = useState<any>(3);
  return (
    <MainContext.Provider value={{ loadActions, setLoadActions }}>
      {children}
    </MainContext.Provider>
  );
};
export default MainContextProvider;
