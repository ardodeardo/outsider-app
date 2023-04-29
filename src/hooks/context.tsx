import React, { createContext, useContext } from 'react';
import NewsReducer from '@/model/reducer';
import { InitialState } from '@/interfaces/reducer';

interface ContainerContextType {
  state: InitialState;
  dispatchSidebar: () => void;
}

const ContainerContext = createContext<ContainerContextType | null>(null);

function AppContext({ children }: { children: React.ReactNode }) {
  const { state, dispatch } = NewsReducer();

  const dispatchSidebar = () => {
    dispatch({
      type: 'sidebar.toggle',
      payload: true
    });
  }

  const value = {
    state,
    dispatchSidebar
  }

  return (
    <ContainerContext.Provider value={value}>
      {children}
    </ContainerContext.Provider>
  )
}

export const useContainer = () => useContext(ContainerContext) as ContainerContextType

export default AppContext